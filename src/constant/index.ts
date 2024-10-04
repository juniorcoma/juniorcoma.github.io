export const HOME_TEXT_RENDER_LIST = [
  '점들을 이어주세요.',
  '삼각형이 보이시나요?',
  '가장 최소한의 점으로 그릴 수 있는 안정적이고 균형잡힌 다각형입니다.',
  '가장 최소한의 코드로 삼각형을 그릴 수 있는 개발자가 목표인',
  'Frontend Developer 박현우입니다.',
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
    projectNavLinkList: [
      {
        id: 1,
        name: 'github',
        link: '',
        text: '깃허브',
      },
      {
        id: 2,
        name: 'figma',
        link: '',
        text: '디자인',
      },
      {
        id: 3,
        name: 'vercel',
        link: '',
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
        {
          id: 4,
          name: 'typescript',
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
  },
  portfolio: {
    projectNavLinkList: [
      {
        id: 1,
        name: 'github',
        link: '',
        text: '깃허브',
      },
      {
        id: 2,
        name: 'vercel',
        link: '',
        text: '사이트',
      },
    ],
    section1: {
      title: 'Portfolio',
      type: 'Personal',
      shortDescription: '개인 포트폴리오 프로젝트입니다.',
      previewVideoPath: '',
    },
    section2: {
      techStackInfo: [
        {
          id: 1,
          name: 'react',
          reasonUse:
            'YOO.GG는 서비스를 제공하기 위해 다양한 Riot api를 사용하고 있습니다. 그 중 챔피언 데이터, 룬데이터, 스펠 데이터 등 많은 정적 자원을 요청하는 부분이 많기 때문에 Next.js의',
        },
        {
          id: 2,
          name: 'styledcomponent',
          reasonUse:
            'YOO.GG는 서비스를 제공하기 위해 다양한 Riot api를 사용하고 있습니다. 그 중 챔피언 데이터, 룬데이터, 스펠 데이터 등 많은 정적 자원을 요청하는 부분이 많기 때문에 Next.js의',
        },
      ],
    },
    section3: {
      coreList: [
        {
          id: 1,
          btnText: '메인화면 canvas',
          imgSrc: '/assets/images/project/yoogg/core/1.png',
          description: '다크 모드를 구현함으로써 사용자에게 보다 편리하고 쾌적한 경험을 제공하였습니다.',
        },
      ],
    },
    section4: {
      Retrospective: '',
    },
  },
  vanillacomp: {
    projectNavLinkList: [
      {
        id: 1,
        name: 'github',
        link: '',
        text: '깃허브',
      },
      {
        id: 2,
        name: 'figma',
        link: '',
        text: '디자인',
      },
      {
        id: 3,
        name: 'vercel',
        link: '',
        text: '사이트',
      },
    ],
    section1: {
      title: 'VanillaComp',
      type: 'Personal',
      shortDescription: 'React와 유사한 컴포넌트 구조를 순수 자바스크립트로 구현한 프로젝트입니다.',
      previewVideoPath: '',
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
          btnText: '다크 모드',
          imgSrc: '/assets/images/project/yoogg/core/1.png',
          description: '다크 모드를 구현함으로써 사용자에게 보다 편리하고 쾌적한 경험을 제공하였습니다.',
        },
      ],
    },
    section4: {
      Retrospective: '',
    },
  },
  pickletime: {
    projectNavLinkList: [
      {
        id: 1,
        name: 'github',
        link: '',
        text: '깃허브',
      },
      {
        id: 2,
        name: 'figma',
        link: '',
        text: '디자인',
      },
      {
        id: 3,
        name: 'vercel',
        link: '',
        text: '사이트',
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
            'YOO.GG는 서비스를 제공하기 위해 다양한 Riot api를 사용하고 있습니다. 그 중 챔피언 데이터, 룬데이터, 스펠 데이터 등 많은 정적 자원을 요청하는 부분이 많기 때문에 Next.js의',
        },
        {
          id: 2,
          name: 'styledcomponent',
          reasonUse:
            'YOO.GG는 서비스를 제공하기 위해 다양한 Riot api를 사용하고 있습니다. 그 중 챔피언 데이터, 룬데이터, 스펠 데이터 등 많은 정적 자원을 요청하는 부분이 많기 때문에 Next.js의',
        },
        {
          id: 3,
          name: 'zustand',
          reasonUse:
            'YOO.GG는 서비스를 제공하기 위해 다양한 Riot api를 사용하고 있습니다. 그 중 챔피언 데이터, 룬데이터, 스펠 데이터 등 많은 정적 자원을 요청하는 부분이 많기 때문에 Next.js의',
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
      ],
    },
    section4: {
      Retrospective: '',
    },
  },
  danchoo: {
    projectNavLinkList: [
      {
        id: 1,
        name: 'github',
        link: '',
        text: '깃허브',
      },
      {
        id: 3,
        name: 'vercel',
        link: '',
        text: '사이트',
      },
    ],
    section1: {
      title: 'Danchoo',
      type: 'Team',
      shortDescription: '가게에 급한 일손이 필요한 경우 더 높은 페이를 주고 일손을 매칭시켜주는 서비스입니다.',
      previewVideoPath: '',
    },
    section2: {
      techStackInfo: [
        {
          id: 1,
          name: 'next',
          reasonUse:
            'YOO.GG는 서비스를 제공하기 위해 다양한 Riot api를 사용하고 있습니다. 그 중 챔피언 데이터, 룬데이터, 스펠 데이터 등 많은 정적 자원을 요청하는 부분이 많기 때문에 Next.js의',
        },
        {
          id: 2,
          name: 'tailwind',
          reasonUse:
            'YOO.GG는 서비스를 제공하기 위해 다양한 Riot api를 사용하고 있습니다. 그 중 챔피언 데이터, 룬데이터, 스펠 데이터 등 많은 정적 자원을 요청하는 부분이 많기 때문에 Next.js의',
        },
        {
          id: 3,
          name: 'typescript',
          reasonUse:
            'YOO.GG는 서비스를 제공하기 위해 다양한 Riot api를 사용하고 있습니다. 그 중 챔피언 데이터, 룬데이터, 스펠 데이터 등 많은 정적 자원을 요청하는 부분이 많기 때문에 Next.js의',
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
      ],
    },
    section4: {
      Retrospective: '',
    },
  },
  rolling: {
    projectNavLinkList: [
      {
        id: 1,
        name: 'github',
        link: '',
        text: '깃허브',
      },
      {
        id: 3,
        name: 'vercel',
        link: '',
        text: '사이트',
      },
    ],
    section1: {
      title: 'Rolling',
      type: 'Team',
      shortDescription:
        '추억의 롤링페이퍼를 오프라인에서 쓰는 것이 아닌 온라인으로 간편하게 작성할 수 있는 플랫폼입니다.',
      previewVideoPath: '',
    },
    section2: {
      techStackInfo: [
        {
          id: 1,
          name: 'react',
          reasonUse:
            'YOO.GG는 서비스를 제공하기 위해 다양한 Riot api를 사용하고 있습니다. 그 중 챔피언 데이터, 룬데이터, 스펠 데이터 등 많은 정적 자원을 요청하는 부분이 많기 때문에 Next.js의',
        },
        {
          id: 2,
          name: 'styledcomponent',
          reasonUse:
            'YOO.GG는 서비스를 제공하기 위해 다양한 Riot api를 사용하고 있습니다. 그 중 챔피언 데이터, 룬데이터, 스펠 데이터 등 많은 정적 자원을 요청하는 부분이 많기 때문에 Next.js의',
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
      ],
    },
    section4: {
      Retrospective: '',
    },
  },
};
