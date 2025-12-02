// 조각난 시간들의 합집합 계산
const mergeIntervals = (intervals) => {
  if (intervals.length === 0) return [];

  // 시작 시간 순 정렬
  const sortedList = [...intervals].sort((a, b) => a.startTime - b.startTime);
  const mergedList = [sortedList[0]];

  for (let i = 1; i < sortedList.length; i++) {
    const lastBlock = mergedList[mergedList.length - 1];
    const currentBlock = sortedList[i];

    // ex) 09:30 ~ 11:00 / 10:00 ~ 12:00 중간이 겹치므로 09:30~12:00으로 합침
    if (currentBlock.startTime < lastBlock.endTime) {
      // QUIET 시간이 겹치면 합쳐서 하나의 블록으로 만들기
      lastBlock.endTime = (Math.max(lastBlock.endTime, currentBlock.endTime));
    } else {
      // 안 겹치면 추가
      mergedList.push(currentBlock);
    }
  }
  return mergedList;
};

// FREE 시간에서 QUIET 합집합 빼기
const subtractIntervals = (freeBlock, quietBlock) => {
  let result = [freeBlock];

  for (const quiet of quietBlock) {
    const nextResult = [];
    for (const r of result) {
      // FREE 시간이 QUIET 시간과 겹치지 않을 경우 저장
      if (quiet.endTime <= r.startTime || quiet.startTime >= r.endTime) {
        nextResult.push(r);
      }
      // FREE 시간이 QUIET 합집합에 완전히 포함되었을 경우 저장하지 않고 continue
      else if (quiet.startTime <= r.startTime && quiet.endTime >= r.endTime) {
        continue;
      }
      // FREE 시간의 일부가 QUIET 합집합에 포함되었을 경우
      else {
        // 앞부분이 남을 경우 QUIET의 시작 시간을 FREE의 종료 시간으로 대체하여 저장
        if (quiet.startTime > r.startTime) {
          nextResult.push({
            startTime: r.startTime,
            endTime: quiet.startTime,
            date: r.date,
          });
        }
        // 뒷부분이 남을 경우 QUIET의 종료 시간을 FREE의 시작 시간으로 대체하여 저장
        if (quiet.endTime < r.endTime) {
          nextResult.push({
            startTime: quiet.endTime,
            endTime: r.endTime,
            date: r.date,
          });
        }
      }
    }
    result = nextResult;
  }
  return result;
};

module.exports = {
    mergeIntervals,
    subtractIntervals,
}