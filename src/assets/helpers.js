export const getLastTest = function(omitedId, testList) {
  if (testList) {
    let list = Object.values(testList).filter((x) => x.test_id != omitedId);
    if (list) {
      const last = list.sort((a, b) => b.start_time - a.start_time)[0];
      return last.empathy_mode;
    }
  }
  return false;
};

export const copyText = async function(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.log(error);
  }
};

export const getReport = function() {
  const report = require("@/assets/report.json");

  for (const [key, value] of Object.entries(report.tests)) {
    console.log(
      `${key}: ${value.empathy_mode} ${JSON.stringify(
        value.user
      )}, time: ${new Date(value.start_time)}`
    );
  }
};
