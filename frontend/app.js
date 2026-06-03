const reviewInput = document.getElementById("reviewInput");
const reviewButton = document.getElementById("reviewButton");
const riskResult = document.getElementById("riskResult");
const suggestionResult = document.getElementById("suggestionResult");
const testResult = document.getElementById("testResult");

function analyzeContent(content) {
  const text = content.trim();
  const lowerText = text.toLowerCase();

  const risks = [];
  const suggestions = [];
  const tests = [];

  if (text.length < 50) {
    risks.push("PR 描述较短，评审者可能难以理解修改背景和影响范围。");
    suggestions.push("补充修改原因、影响模块和关键实现思路。");
  }

  if (!text.includes("测试") && !lowerText.includes("test")) {
    risks.push("当前内容没有说明测试方式，可能无法证明修改已经验证。");
    tests.push("补充手动测试步骤、接口测试结果或单元测试说明。");
  }

  if (lowerText.includes("todo") || text.includes("待完成")) {
    risks.push("内容中包含未完成事项，需要确认是否会影响交付质量。");
    suggestions.push("将未完成内容拆成后续计划，避免影响本次 PR 的完整性。");
  }

  if (text.includes("密码") || lowerText.includes("password") || lowerText.includes("secret")) {
    risks.push("内容中可能包含敏感信息，需要检查是否误提交密钥、密码或配置。");
    suggestions.push("将敏感信息放入环境变量或配置文件，并避免提交到仓库。");
  }

  if (risks.length === 0) {
    risks.push("暂未发现明显风险，但仍建议结合代码变更进行人工复核。");
  }

  if (suggestions.length === 0) {
    suggestions.push("建议在 PR 描述中说明修改目标、实现方式和影响范围。");
  }

  if (tests.length === 0) {
    tests.push("建议至少补充一种验证方式，例如页面操作、接口请求或单元测试。");
  }

  return {
    risk: risks.join(" "),
    suggestion: suggestions.join(" "),
    test: tests.join(" "),
  };
}

reviewButton.addEventListener("click", () => {
  const content = reviewInput.value;

  if (!content.trim()) {
    riskResult.textContent = "请先输入 PR 描述或代码片段。";
    suggestionResult.textContent = "输入内容后，系统会生成修改建议。";
    testResult.textContent = "输入内容后，系统会生成测试建议。";
    return;
  }

  const result = analyzeContent(content);
  riskResult.textContent = result.risk;
  suggestionResult.textContent = result.suggestion;
  testResult.textContent = result.test;
});