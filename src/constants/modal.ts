const networkErrorMessage = {
  TITLE: '네트워크에 연결할 수 없어요.',
  CONTENTS: [
    '하루플레이를 이용하기 위해서는',
    '휴대폰의 네트워크 또는',
    '와이파이를 확인해주세요.',
  ],
  BUTTONS: {
    LABEL: '재연결 하기',
  },
} as const;

const newUpdateMessage = {
  TITLE: '새로운 업데이트가 있어요.',
  CONTENTS: ['원활한 이용을 위해서', '업데이트를 진행해주세요.'],
  BUTTONS: {
    LABEL: '재연결 하기',
  },
} as const;

const useNotificationsMessage = {
  TITLE: '알림을 사용해 보세요!',
  CONTENTS: ['일기를 매일 쓸 수 있도록', '하루플레이가 도움을 드릴게요.'],
  BUTTONS: {
    LABEL1: '필요 없어요',
    LABEL2: '알림 설정하기',
  },
} as const;

const notificationsPermissionSettingsMessage = {
  TITLE: '알림 권한 설정 안내',
  CONTENTS: ['설정한 시간에 맞춰', '알림을 받기 위해서 권한을 설정해 주세요.'],
  BUTTONS: {
    LABEL1: '알림 안하기',
    LABEL2: '권한 설정하기',
  },
} as const;

const diaryDeleteMessage = {
  TITLE: '일기를 삭제할까요?',
  CONTENTS: [
    '삭제된 일기는 다시 불러올 수 없습니다.',
    '그래도 삭제하시겠어요?',
  ],
  BUTTONS: {
    LABEL1: '삭제',
    LABEL2: '취소',
  },
} as const;

const diaryExistingMessage = {
  TITLE: '기존에 작성된 일기가 있어요.',
  CONTENTS: [
    '선택하신 날짜에 기존에',
    '작성된 일기가 있습니다.',
    '새롭게 덮어쓰시겠습니까?',
  ],
  BUTTONS: {
    LABEL1: '덮어쓰기',
    LABEL2: '취소',
  },
} as const;

const diaryStopEditingMessage = {
  TITLE: '수정을 그만둘까요?',
  CONTENTS: [
    '지금까지 수정한 내용은 저장되지 않습니다.',
    '그래도 취소하시겠어요?',
  ],
  BUTTONS: {
    LABEL1: '나가기',
    LABEL2: '취소',
  },
} as const;

const diaryInProgressMessage = {
  TITLE: '작성 중이던 일기가 있어요!',
  CONTENTS: [
    '작성하던 일기를 이어서 작성할까요?',
    '삭제를 누르면, 임시저장된 글은',
    '바로 삭제되어 복구할 수 없습니다.',
  ],
  BUTTONS: {
    LABEL1: '삭제하기',
    LABEL2: '이어서 작성',
  },
} as const;

const musicReRecommendMessage = {
  TITLE: '노래 재추천이 필요하신가요?',
  CONTENTS: [
    '재추천을 위해선 영상을 시청해야합니다.',
    '영상을 시청하시겠어요?',
  ],
  BUTTONS: {
    LABEL1: '취소',
    LABEL2: '재추천 하기',
  },
} as const;

const guestDataDeleteMessage = {
  TITLE: '게스트 데이터가 삭제됩니다.',
  CONTENTS: [
    '로그인을 계속하실 경우',
    '게스트 상태에서 남긴 기록은 삭제되며',
    '삭제된 기록은 복구할 수 없습니다.',
    '그래도 로그인하시겠습니까?',
  ],
  BUTTONS: {
    LABEL1: '취소',
    LABEL2: '로그인하기',
  },
} as const;

const withdrawalMessage = {
  TITLE: '탈퇴',
  CONTENTS: ['정말 탈퇴 하시겠습니까?'],
  BUTTONS: {
    LABEL1: '취소',
    LABEL2: '확인',
  },
} as const;

export {
  networkErrorMessage,
  newUpdateMessage,
  useNotificationsMessage,
  notificationsPermissionSettingsMessage,
  diaryDeleteMessage,
  diaryExistingMessage,
  diaryStopEditingMessage,
  diaryInProgressMessage,
  musicReRecommendMessage,
  guestDataDeleteMessage,
  withdrawalMessage,
};
