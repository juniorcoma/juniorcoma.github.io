export const HOME_TEXT_RENDER_LIST = [
  '점들을 하나씩 이어보세요.',
  '모든 점을 다 이으셨나요? 이제 무엇이 보이나요?',
  '혹시 삼각형이 떠오르시나요?',
  '삼각형은 가장 적은 점으로 그릴 수 있는, 안정적이고 균형잡힌 다각형이자 기하학의 시작입니다.',
  '이 삼각형들이 모이면 다양한 다각형이 만들어집니다.',
  '저는 이러한 삼각형처럼 기본을 튼튼히 하며, 성장해나가는 개발자,',
  'Frontend Developer 박현우입니다.',
];

export const NAV_BAR_LINK_LIST = [
  {
    id: 1,
    text: 'Home',
    to: '/',
  },
  {
    id: 2,
    text: 'Content',
    to: '/content',
  },
  {
    id: 3,
    text: 'About',
    to: '/about',
  },
  {
    id: 4,
    text: 'Project',
    to: '/project',
  },
  {
    id: 5,
    text: 'Contact',
    to: '/contact',
  },
];

export const CONTENT_MENU_TEXT_LIST = [
  {
    id: 1,
    text: 'ABOUT',
  },
  {
    id: 2,
    text: 'PROJECT',
  },
  {
    id: 3,
    text: 'CONTACT',
  },
];

export const TECH_STACK_INFO = {
  html: {
    id: 1,
    text: 'HTML',
    imgSrc: '/assets/images/HTML5.png',
    alt: 'HTML logo',
  },
  css: {
    id: 2,
    text: 'CSS',
    imgSrc: '/assets/images/CSS3.png',
    alt: 'CSS logo',
  },
  javascript: {
    id: 3,
    text: 'JavaScript',
    imgSrc: '/assets/images/JavaScript.png',
    alt: 'JavaScript logo',
  },
  typescript: {
    id: 4,
    text: 'TypeScript',
    imgSrc: '/assets/images/TypeScript.png',
    alt: 'TypeScript logo',
  },
  react: {
    id: 5,
    text: 'REACT',
    imgSrc: '/assets/images/React.png',
    alt: 'REACT logo',
  },
  reactquery: {
    id: 6,
    text: 'React-Query',
    imgSrc: '/assets/images/React-query.png',
    alt: 'React-Query logo',
  },
  next: {
    id: 7,
    text: 'Next.js',
    imgSrc: '/assets/images/Next.js.png',
    alt: 'Next.js logo',
  },
  styledcomponent: {
    id: 8,
    text: 'Styled-Component',
    imgSrc: '/assets/images/Styled-component.png',
    alt: 'Styled-Component logo',
  },
  tailwind: {
    id: 9,
    text: 'Tailwind-css',
    imgSrc: '/assets/images/Tailwind CSS.png',
    alt: 'Tailwind-css logo',
  },
  vercel: {
    id: 10,
    text: 'Vercel',
    imgSrc: '/assets/images/Vercel.png',
    alt: 'Tailwind-css logo',
  },
  zustand: {
    id: 11,
    text: 'Zustand',
    imgSrc: '/assets/images/Zustand.png',
    alt: 'Zustand logo',
  },
  github: {
    id: 12,
    text: 'Github',
    imgSrc: '/assets/images/GitHub.png',
    alt: 'GitHub logo',
  },
  Notion: {
    id: 13,
    text: 'Notion',
    imgSrc: '/assets/images/Notion.png',
    alt: 'Notion logo',
  },
  figma: {
    id: 14,
    text: 'Figma',
    imgSrc: '/assets/images/Figma.png',
    alt: 'Figma logo',
  },
};

export const PROJECT_RENDER_INFO = {
  personal: [
    {
      id: 1,
      projectName: 'YOO.GG',
      description: '리그오브레전드 정보 탐색 서비스',
      link: '/project/yoogg',
      previewImg: '/assets/images/project/yoogg/yoogg-preview.png',
    },
    {
      id: 2,
      projectName: 'Portflio',
      description: '개인 포트폴리오',
      link: '/project/portfolio',
      previewImg: '/assets/images/project/portfolio/portfolio.preview.png',
    },
    {
      id: 3,
      projectName: 'VanillaComp',
      description: 'React와 유사한 컴포넌트 구조를 순수 자바스크립트로 구현한 프로젝트',
      link: '/project/vanillacomp',
      previewImg: '/assets/images/project/vanillacomp/vanillacomp.preview.png',
    },
  ],

  team: [
    {
      id: 1,
      projectName: 'Pickle Time',
      description: '자투리 시간을 가치있게 만들어주는 서비스',
      link: '/project/pickletime',
      previewImg: '/assets/images/project/pickletime/pickletime.preview.png',
    },
    {
      id: 2,
      projectName: 'Danchoo',
      description: '온라인 아르바이트, 사장님 매칭 서비스',
      link: '/project/danchoo',
      previewImg: '/assets/images/project/danchoo/danchoo.preview.png',
    },
    {
      id: 3,
      projectName: 'Rolling',
      description: '추억의 롤링페이퍼을 온라인에서 작성할 수 있는 서비스',
      link: '/project/rolling',
      previewImg: '/assets/images/project/rolling/rolling.preview.png',
    },
  ],
};

export const PROJECT_DETAIL_INFO: {} = {
  yoogg: {
    type: 'personal',
    primaryColor: '#5383e8',
    projectNavLinkList: [
      {
        id: 1,
        name: 'github',
        link: 'https://github.com/juniorcoma/YOO.GG',
        text: '깃허브',
      },
      {
        id: 2,
        name: 'figma',
        link: 'https://www.figma.com/design/9KoKnbwl1rQLt1jzROwTgq/YOO.GG?node-id=0-1&t=9Z1bWV89t5EeZSOe-1',
        text: '디자인',
      },
      {
        id: 3,
        name: 'vercel',
        link: 'https://yoo-gg.vercel.app/',
        text: '사이트',
      },
    ],
    section1: {
      title: 'YOO.GG',
      type: 'Personal',
      shortDescription:
        '인기 게임 리그오브레전드의 모든 챔피언의 정보를 얻고 소환사 검색을 통해 소환사의 다양한 정보를 알아보세요!',
      previewVideoPath: '/video/yoogg/yoogg.video.mp4',
    },
    section2: {
      techStackInfo: [
        {
          id: 1,
          name: 'next',
          reasonUse:
            'YOO.GG는 다양한 Riot API를 사용하여 서비스를 제공합니다. 특히 챔피언 데이터, 룬 데이터, 스펠 데이터 등 여러 정적 자원을 자주 요청하기 때문에, Next.js의 기본 SSR 방식을 도입했습니다. 또한 소환사 데이터는 Router handler로 자체 API를 구현하여, 클라이언트가 직접 Riot 서버에 요청하는 대신, 서버에서 Riot API에 요청한 데이터를 클라이언트에 전달하는 방식으로 처리했습니다.',
        },
        {
          id: 2,
          name: 'tailwind',
          reasonUse:
            'Tailwind는 클래스를 통해 CSS를 적용할 수 있어 편리하다는 장점이 있습니다. Next.js 프로젝트를 시작할 때 Tailwind 설치 여부를 묻는 것을 보아, Next.js와 Tailwind가 잘 어울린다고 생각하여 Tailwind를 사용했습니다.',
        },
        {
          id: 3,
          name: 'reactquery',
          reasonUse:
            '소환사 전적 검색의 경우 더보기라는 버튼으로 추가 전적을 불러오는 로직이 있습니다. 따라서 사용자의 상호작용에 따라 데이터를 불러오는 것이라고 판단하여 react-query를 통해 추가 데이터를 불러올 수 있게 하였습니다.',
        },
      ],
    },
    section3: {
      coreList: [
        {
          id: 1,
          btnText: '다크 모드',
          imgSrc: '/assets/images/project/yoogg/core/1.png',
          description: '다크 모드를 구현함으로써 사용자에게 보다 편리하고 쾌적한 경험을 제공하였습니다.',
        },
        {
          id: 2,
          btnText: '다국어 지원',
          imgSrc: '/assets/images/project/yoogg/core/2.png',
          description:
            'next-intl를 활용하여 다국어 지원을 구현함으로써, 사용자에게 보다 포괄적이고 접근 가능한 경험을 제공하였습니다.',
        },
        {
          id: 3,
          btnText: '전적 검색 헤더',
          imgSrc: '/assets/images/project/yoogg/core/3.png',
          description:
            '전적 검색헤더가 사라지면 숨겨진 헤더가 상단에 고정되면서 다시 스크롤할 필요 없이 바로 전적 검색이 가능하게 하여 사용자 경험을 향상시켰습니다.',
        },
        {
          id: 4,
          btnText: 'Tooltip',
          imgSrc: '/assets/images/project/yoogg/core/4.png',
          description: '전적 검색에서 룬, 아이템 이미지에 hover시 Tooltip으로 해당 정보를 바로 제공하였습니다.',
        },
        {
          id: 5,
          btnText: '검색 정보 저장',
          imgSrc: '/assets/images/project/yoogg/core/5.png',
          description: '사용자가 검색한 소환사를 저장하여 다시 검색할 필요 없이 바로 재검색이 가능하도록 하였습니다.',
        },
        {
          id: 6,
          btnText: '편리한 챔피언 검색',
          imgSrc: '/assets/images/project/yoogg/core/6.png',
          description:
            '실시간으로 사용자의 검색값을 매치하여 일치하는 챔피언이 나오고 챔피언을 다 안적어도 매칭된 챔피언이 1개라면 바로 Enter를 눌러 챔피언을 검색할 수 있도록하였습니다.',
        },
      ],
    },
    section4: {
      link: 'https://developing-gruyere-6ac.notion.site/YOO-GG-119d9094d93e800980a7fade7f37d061?pvs=4',
    },
  },
  portfolio: {
    type: 'personal',
    primaryColor: '#FF8C00',
    projectNavLinkList: [
      {
        id: 1,
        name: 'github',
        link: 'https://github.com/juniorcoma/juniorcoma.github.io',
        text: '깃허브',
      },
      {
        id: 2,
        name: 'vercel',
        link: 'https://juniorcoma.github.io/',
        text: '사이트',
      },
    ],
    section1: {
      title: 'Portfolio',
      type: 'Personal',
      shortDescription: '개인 포트폴리오 프로젝트입니다.',
      previewVideoPath: '/video/portfolio/portfolio.video.mp4',
    },
    section2: {
      techStackInfo: [
        {
          id: 1,
          name: 'react',
          reasonUse: '',
        },
        {
          id: 2,
          name: 'styledcomponent',
          reasonUse: '',
        },
      ],
    },
    section3: {
      coreList: [
        {
          id: 1,
          btnText: '메인화면 Canvas',
          imgSrc: '/assets/images/project/portfolio/core/1.png',
          description:
            '메인화면 Canvas는 세 개의 점이 돌아다니며 사용자의 상호작용을 통한 선그리그를 구현하였습니다. 또한 각 점에서 나온 변의 수가 2개가 된다면 다음으로 넘어가기 위한 장면이 나옵니다.',
        },
        {
          id: 2,
          btnText: '메뉴 Canvas',
          imgSrc: '/assets/images/project/portfolio/core/2.png',
          description:
            '메뉴 페이지의 Canvas는 점들이 돌아다니며 점과 점사이의 거리가 100이하가 되면 점과 점사이에 선을 그리게 됩니다. 또한 Content는 svg를 활용하여 hover했을 때 애니메이션 효과를 추가하였습니다.',
        },
        {
          id: 3,
          btnText: '프로젝트 리스트',
          imgSrc: '/assets/images/project/portfolio/core/3.png',
          description:
            '프로젝트 리스트 페이지는 삼각형을 이용하여 삼각형은 개인 프로젝트, 삼각형이 모여 이루어진 사면체는 팀 프로젝트로 구상하여 디자인 하였습니다.',
        },
        {
          id: 4,
          btnText: '프로젝트 페이지',
          imgSrc: '/assets/images/project/portfolio/core/4.png',
          description:
            '프로젝트 페이지에서 각 프로젝트의 PrimaryColor를 설정하여, 각 프로젝트마다 고유한 시각적 정체성을 부여하고자 했습니다. 이를 통해 사용자는 각 프로젝트를 쉽게 구분할 수 있으며, 각 프로젝트의 개성을 색상으로도 느낄 수 있습니다. ',
        },
        {
          id: 5,
          btnText: '프로젝트 기능 컨테이너',
          imgSrc: '/assets/images/project/portfolio/core/5.png',
          description: '프로젝트의 핵심기능을 간편하게 볼 수 있도록 하였습니다.',
        },
      ],
    },
    section4: {
      link: 'https://developing-gruyere-6ac.notion.site/Portfolio-119d9094d93e805e8dbce90a77a5f797?pvs=4',
    },
  },
  vanillacomp: {
    type: 'personal',
    primaryColor: '#FFD700',
    projectNavLinkList: [
      {
        id: 1,
        name: 'github',
        link: 'https://github.com/juniorcoma/vanillaComponentProject',
        text: '깃허브',
      },
      {
        id: 2,
        name: 'figma',
        link: 'https://www.figma.com/design/XStEBdVYnHckc9jeSTJMKS/Portfolio?node-id=0-1&t=XphlS0NrWAHpH8wd-1',
        text: '디자인',
      },
    ],
    section1: {
      title: 'VanillaComp',
      type: 'Personal',
      shortDescription: 'React와 유사한 컴포넌트 구조를 순수 자바스크립트로 구현한 프로젝트입니다.',
      previewVideoPath: '/video/vanillacomp/vanillacomp.video.mp4',
    },
    section2: {
      techStackInfo: [
        {
          id: 1,
          name: 'javascript',
          reasonUse:
            'React와 유사한 컴포넌트 구조를 구현하기 위해 javascript의 class문법을 사용하여 coomponent의 틀을 만들고 그 class를 상속하여 컴포넌트 구조를 구현하였습니다.',
        },
      ],
    },
    section3: {
      coreList: [
        {
          id: 1,
          btnText: 'JS class문법사용',
          imgSrc: '/assets/images/project/vanillacomp/core/1.png',
          description: 'JS의 class문법을 사용하여 React의 component 패턴을 흉내내었습니다.',
        },
        {
          id: 2,
          btnText: 'map함수를 이용한 렌더링',
          imgSrc: '/assets/images/project/vanillacomp/core/2.png',
          description: 'map함수를 이용하여 react의 map을 이용한 렌더링 방식을 구현해보았습니다.',
        },
        {
          id: 3,
          btnText: '카드 공통컴포넌트',
          imgSrc: '/assets/images/project/vanillacomp/core/3.png',
          description: '프로젝트 카드를 공통 컴포넌트로 구현하였습니다.',
        },
        {
          id: 4,
          btnText: '이미지 슬라이더',
          imgSrc: '/assets/images/project/vanillacomp/core/4.png',
          description: '이미지 슬라이더는 프로젝트 카드 컴포넌트에서 따로 분리하여 관리하였습니다.',
        },
        {
          id: 5,
          btnText: '반응형',
          imgSrc: '/assets/images/project/vanillacomp/core/5.png',
          description: '반응형 웹을 구축하여 사용자의 다양한 기기에서 최적화된 화면을 제공했습니다.',
        },
      ],
    },
    section4: {
      link: 'https://developing-gruyere-6ac.notion.site/VanillaComp-119d9094d93e8044a950dc5ab81c3316?pvs=4',
    },
  },
  pickletime: {
    type: 'team',
    primaryColor: '#5DC26D',
    projectNavLinkList: [
      {
        id: 1,
        name: 'github',
        link: 'https://github.com/Splint-Final-Project/Pickle-Time-Frontend',
        text: '깃허브',
      },
      {
        id: 2,
        name: 'figma',
        link: 'https://www.figma.com/design/KrG2R6jbUc0VORePSHZp6j/Pickle-Time?node-id=0-1&t=x5VXFlK3YsLEWcjE-1',
        text: '디자인',
      },
    ],
    section1: {
      title: 'Pickle Time',
      type: 'Team',
      shortDescription:
        '피클타임(Pickle Time)은 뜻이 맞는 사람들과 함께 자투리 시간을 가치 있게 만들어주는 자기개발 플랫폼입니다.',
      previewVideoPath: '',
    },
    section2: {
      techStackInfo: [
        {
          id: 1,
          name: 'react',
          reasonUse:
            'Next.js로 하자는 의견도 있었지만 팀원들과 소통한 결과 React만으로 충분할 것 같다는 판단하에 React만 사용하기로 결정하였습니다.',
        },
        {
          id: 2,
          name: 'styledcomponent',
          reasonUse: '',
        },
        {
          id: 3,
          name: 'zustand',
          reasonUse:
            'Pickle Time에서는 bottom modal과 피클 생성 단계 정보를 전역적으로 관리합니다. 따라서 이를 전역 상태를 보다 쉽고 간편하게 관리하기 위해 zustand를 사용합니다.',
        },
        {
          id: 3,
          name: 'reactquery',
          reasonUse: '피클 생성과 피클 목록을 불러오는 등 다양한 API를 사용하기 때문에 React-query를 사용하였습니다.',
        },
      ],
    },
    section3: {
      coreList: [
        {
          id: 1,
          btnText: '검색해서 피클 찾기',
          imgSrc: '/assets/images/project/pickletime/core/1.gif',
          description: '피클 제목으로 검색하여 사용자가 원하는 피클들을 찾을 수 있습니다.',
        },
        {
          id: 2,
          btnText: '내 프로필 수정',
          imgSrc: '/assets/images/project/pickletime/core/2.gif',
          description: '사용자가 생성했던 프로필을 수정할 수 있습니다.',
        },
        {
          id: 3,
          btnText: '내 피클 목록 확인',
          imgSrc: '/assets/images/project/pickletime/core/3.gif',
          description: '진행전, 진행중, 종료된 피클들 목록을 확인할 수 있으며 오늘의 피클을 확인 할 수 있습니다.',
        },
        {
          id: 4,
          btnText: '마이페이지 확인',
          imgSrc: '/assets/images/project/pickletime/core/4.gif',
          description: '마이페이지를 확인하여 사용자의 현재 정보를 확인 할 수 있습니다.',
        },
        {
          id: 5,
          btnText: '미로그인시',
          imgSrc: '/assets/images/project/pickletime/core/5.gif',
          description: '미로그인 상태에서 서비스를 이용할려고 하는 경우 로그인 창으로 리다이렉트 됩니다.',
        },
        {
          id: 6,
          btnText: '지도 탐색',
          imgSrc: '/assets/images/project/pickletime/core/6.gif',
          description: '지도를 탐색을 통해 좀 더 쉽게 피클들을 찾을 수 있고 신청할 수 있습니다.',
        },
        {
          id: 7,
          btnText: '피클 생성',
          imgSrc: '/assets/images/project/pickletime/core/7.gif',
          description: 'AI를 도입하여 이미지를 생성하여 사용자가 피클 생성을 더 간편하게 할 수 있게 하였습니다.',
        },
        {
          id: 8,
          btnText: '피클 수정',
          imgSrc: '/assets/images/project/pickletime/core/8.gif',
          description: '피클을 생성한 상태에서 사용자가 다시 수정할 수 있게 함으로써 사용자의 편의성을 높였습니다.',
        },
      ],
    },
    section4: {
      myFeatureList: [
        {
          id: 1,
          feature:
            '공통 Bottom Sheet Modal을 개발함으로써 사용자에게 일관된 UI 경험을 제공하였습니다. 이 모달은 다양한 상황에서 재사용 가능하도록 설계되어, 애플리케이션 내에서 여러 컴포넌트에서 쉽게 호출할 수 있는 구조를 갖추었습니다. Zustand를 활용하여 모달 상태를 전역으로 관리함으로써, 상태 관리의 복잡성을 줄이고, 컴포넌트 간의 효율적인 데이터 흐름을 유지할 수 있었습니다. 이를 통해 모달의 열림과 닫힘 상태를 중앙에서 관리하며, 다양한 컴포넌트에서 일관된 상태를 유지할 수 있었습니다.',
        },
        {
          id: 2,
          feature:
            '메인 페이지의 인기 급상승 피클 UI, 마감 임박 피클 UI를 공통 컴포넌트로 개발하였습니다. 공통 컴포넌트인만큼 재사용성을 중요시하였으며 React의 Suspense와 ErrorBoundary를 직접 구현하여 에러가 발생하거나 로딩 중일때 사용자의 불편을 최소화 하였습니다.',
        },
        {
          id: 3,
          feature:
            '피클을 신청하거나 피클을 생성할 때의 마지막 단계인 결제 페이지의 컴포넌트들을 구현하였습니다. 결제하는 디자인은 같기 때문에 범용적으로 사용할 수 있는 이름으로 컴포넌트를 네이밍 하였습니다. 결제 로직도 구현하고 싶었지만 당시 트러블 슈팅으로 저가 구현하지 못해 큰 아쉬움이 남았습니다.',
        },
        {
          id: 4,
          feature:
            '내 피클 페이지에 대한 컴포넌트들을 구현하였습니다. 내 피클 카드는 현재 날짜에 맞춰 진행전, 진행중, 종료 중 하나의 상태를 갖게 되어 각 상태마다 UI가 조금씩 다르지만 전체적인 디자인 틀은 같기 때문에 하나의 컴포넌트로 만들어 각 상태에 따라서 그에 맞는 UI가 랜더링 되도록 구현하였습니다.',
        },
      ],
    },
  },
  danchoo: {
    type: 'team',
    primaryColor: '#1160da',
    projectNavLinkList: [
      {
        id: 1,
        name: 'github',
        link: 'https://github.com/5-PS/DANCHOO',
        text: '깃허브',
      },
      {
        id: 3,
        name: 'vercel',
        link: 'https://the-julge.netlify.app/',
        text: '사이트',
      },
    ],
    section1: {
      title: 'Danchoo',
      type: 'Team',
      shortDescription: '가게에 급한 일손이 필요한 경우 더 높은 페이를 주고 일손을 매칭시켜주는 서비스입니다.',
      previewVideoPath: '/video/danchoo/danchoo.video.mp4',
    },
    section2: {
      techStackInfo: [
        {
          id: 1,
          name: 'next',
          reasonUse: '',
        },
        {
          id: 2,
          name: 'tailwind',
          reasonUse: '',
        },
        {
          id: 3,
          name: 'typescript',
          reasonUse: '',
        },
      ],
    },
    section3: {
      coreList: [
        {
          id: 1,
          btnText: '회원가입',
          imgSrc: '/assets/images/project/danchoo/core/1.png',
          description: '회원가입시 기업과 취준생을 선택하여 회원가입을 할 수 있습니다.',
        },
        {
          id: 2,
          btnText: '맞춤공고, 전체 공고',
          imgSrc: '/assets/images/project/danchoo/core/2.png',
          description: '전체 공고와 자신이 정한 선호지역에 따라 맞춤공고를 제공합니다.',
        },
        {
          id: 3,
          btnText: '프로필 등록',
          imgSrc: '/assets/images/project/danchoo/core/3.png',
          description: '프로필을 등록할 수 있으며 자신이 신청한 공고에 대한 상태를 확인할 수 있습니다.',
        },
        {
          id: 4,
          btnText: '검색',
          imgSrc: '/assets/images/project/danchoo/core/4.png',
          description: '공고를 검색하여 자신이 찾고 있는 공고를 바로 찾을 수 있습니다.',
        },
        {
          id: 5,
          btnText: '필터',
          imgSrc: '/assets/images/project/danchoo/core/5.png',
          description: '공고를 필터링하여 사용자가 원하는 공고를 찾아볼 수 있습니다.',
        },
        {
          id: 6,
          btnText: '기업정보 등록',
          imgSrc: '/assets/images/project/danchoo/core/6.png',
          description: '기업회원은 기업정보를 등록할 수 있으며 기업 정보를 편집하거나 공고를 등록할 수 있습니다.',
        },
        {
          id: 7,
          btnText: '공고 확인',
          imgSrc: '/assets/images/project/danchoo/core/7.png',
          description:
            '올린 공고에서 신청자 목록을 확인할 수 있으며 승인, 거절을 할 수 있습니다. 1명을 승인하게 되면 나머지 신청자들은 자동으로 거절상태가 됩니다.',
        },
      ],
    },
    section4: {
      myFeatureList: [
        {
          id: 1,
          feature:
            ' 페이지 FLOW를 설계에 앞장섰습니다.. App router를 사용하여 프로젝트 개발에 앞서 페이지 구조를 명확히 정리함으로써 App router의 폴더구조를 수월하게 설계하여 개발을 시작하였습니다',
        },
        {
          id: 2,
          feature:
            ' 페이지네이션 컴포넌트를 구현하였습니다. 재사용되는 컴포넌트이고 로직이 중요한 컴포넌트라고 생각하여페이지네이션 구현 로직은 따로 분리하여 개발을 하였습니다.',
        },
        {
          id: 3,
          feature:
            '. 메인 페이지의 필터 컴포넌트를 구현하였습니다. 원래는 버튼과 필터 팝업을 분리하고 상태를 공유하는 식으로 개발을 진행할려고 하였으나 다른 부분에서 사용하는 점이 없다는 것을 고려하여 버튼과 필터 팝업을 합쳐 하나의 컴포넌트로 개발을 진행하였습니다.',
        },
        {
          id: 4,
          feature:
            '가게 정보 등록 폼 페이지와 가게 정보 수정 폼 페이지를 개발하였습니다. 폼에 들어가는 Input같은 경우다른 팀원이 만든 공통 Input컴포넌트를 사용하였으며 수정이 필요하다고 생각하는 부분은 팀원과 소통을통해 수정하였습니다. 또한 이미지 업로드는 백엔드에 나와있는 AWS를 이용한 이미지 업로드를 사용하였습니다.',
        },
        {
          id: 5,
          feature:
            '내 공고 상세 페이지를 개발하였습니다. 이 페이지의신청자 목록 테이블은 내 프로필의 신청 내역에도사용되고 있어 공통 컴포넌트로 분리하여 진행하였습니다. 또한 테이블의 상태 열에 들어가는 부분은 따로 로직이 들어가야하는 부분이라고 판단하여 컴포넌트로 분리하여 진행하였습니다.',
        },
        {
          id: 6,
          feature:
            ' 내 프로필 등록 폼 페이지와 수정 페이지를 개발하였습니다. 상태를 기반으로 하여 한 페이지로 구현할 수도있지만 내 프로필을 등록하는 것과 수정하는 것은 다른 로직이라고 판단하여 각각 다른 페이지로 구현하였습니다.',
        },
      ],
    },
  },
  rolling: {
    type: 'team',
    primaryColor: '#ab57ff',
    projectNavLinkList: [
      {
        id: 1,
        name: 'github',
        link: 'https://github.com/D5ng/part2-6team-project',
        text: '깃허브',
      },
      {
        id: 3,
        name: 'vercel',
        link: 'https://part2-6team-project.vercel.app/',
        text: '사이트',
      },
    ],
    section1: {
      title: 'Rolling',
      type: 'Team',
      shortDescription:
        '추억의 롤링페이퍼를 오프라인에서 쓰는 것이 아닌 온라인으로 간편하게 작성할 수 있는 플랫폼입니다.',
      previewVideoPath: '/video/rolling/rolling.video.mp4',
    },
    section2: {
      techStackInfo: [
        {
          id: 1,
          name: 'react',
          reasonUse: '',
        },
        {
          id: 2,
          name: 'styledcomponent',
          reasonUse: '',
        },
      ],
    },
    section3: {
      coreList: [
        {
          id: 1,
          btnText: '인기, 최신 페이퍼 확인',
          imgSrc: '/assets/images/project/rolling/core/1.png',
          description:
            '인기, 최신 롤링 페이퍼를 확인할 수 있습니다. 또한 스켈레톤 UI를 적용함으로써 사용자의 불편을 최소화 하였습니다.',
        },
        {
          id: 2,
          btnText: '롤링 페이퍼 검색',
          imgSrc: '/assets/images/project/rolling/core/2.png',
          description:
            '롤링 페이퍼 검색 기능을 추가함으로써 사용자에게 원하는 롤링 페이퍼를 더 쉽게 찾을 수 있는 환경을 제공합니다.',
        },
        {
          id: 3,
          btnText: '페이퍼 메세지 확인',
          imgSrc: '/assets/images/project/rolling/core/3.png',
          description: '현재 롤링 페이퍼의 작성된 메세지를 확인 할 수 있습니다.',
        },
        {
          id: 4,
          btnText: '롤링 페이퍼 작성',
          imgSrc: '/assets/images/project/rolling/core/4.png',
          description:
            'Unsplash API를 이용해 컬러뿐만 아니라 더 다양한 배경을 제공함으로써 사용자에게 더욱 개인화된 경험을 선사합니다.',
        },
        {
          id: 5,
          btnText: '페이퍼 메세지 작성',
          imgSrc: '/assets/images/project/rolling/core/5.png',
          description: ' 메세지 다 작성시 메세지 카드 미리보기 기능을 통해 사용자에게 실시간 확인 기능을 제공합니다. ',
        },
        {
          id: 6,
          btnText: '메세지 프로필 설정',
          imgSrc: '/assets/images/project/rolling/core/6.png',
          description: '프로필 이미지 또한 Unsplash API를 이용해 더 다양한 배경을 제공하였습니다.',
        },
      ],
    },
    section4: {
      myFeatureList: [
        {
          id: 1,
          feature: '버튼 공통 컴포넌트를 개발하였습니다.',
        },
        {
          id: 2,
          feature:
            ' 롤링 메세지 작성 폼 페이지를 개발하였습니다.React-quill을 사용하여 메세지 작성 폼을 구현하였습니다.또한, 완성된 메세지를 볼 수 있으면 사용자 경험을 향상 시킬 수 있다고 생각하여 메세지 폼을 작성완료하면 폼 제출전에 완성된 메세지 UI를 구현함으로써 사용자에게 직관적이고 편리한 메시지 작성 과정을 제공할 수 있었습니다.',
        },
        {
          id: 3,
          feature:
            '롤링 페이퍼 리스트 페이지의 롤링 리스트 컴포넌트의 초기 로딩시 스켈레톤 UI를 적용함으로써 사용자에게 로딩시간에 대한 불편을 최소화 하였습니다',
        },
      ],
    },
  },
};
