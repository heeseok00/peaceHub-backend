const validatePreferences = (req, res, next) => {
  // 배열 확인
  if (!Array.isArray(preferences)) {
    return res.status(400).json({ message: 'body is not array' });
  }

  // 지망 중복 체크
  const priorities = preferences.map(task => task.priority);
  // 중복 제거한 배열
  const uniquePriorities = new Set(priorities);

  // 중복 제거 배열, 기존 배열 길이가 다르면 중복이 있는 것으로 판단(1지망 여러 개, 혹은 2지망 여러 개)
  if (priorities.length !== uniquePriorities.size) {
    return res.status(400).json({ message: 'priority duplication' });
  }

  // 업무 중복 체크
  const taskIds = preferences.map(p => p.taskId);
  // 중복 제거한 배열
  const uniqueIds = new Set(taskIds);
  if (taskIds.length !== uniqueIds.size) {
    // 중복 제거 배열, 기존 배열 길이가 다르면 중복이 있는 것으로 판단(1지망, 2지망 업무 동일)
    return res.status(400).json({ message: 'task duplication'});
  } next();
};

module.exports = {
  validatePreferences,
};