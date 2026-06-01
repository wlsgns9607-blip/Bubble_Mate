/* =========================================================
   Bubble Mate — 데이터 파일
   인기상품 8개 각각 모든 정보(이름/가격/팁/특징/사용법)를 담음.
   상세페이지는 이 데이터로 통째로 다시 그려짐.
   이미지는 src를 비워두고 alt에 안내문을 적어둠 → 사진만 갈아끼우면 됨.
   ========================================================= */

const DEFAULT_PRODUCTS = [
  {
    id: "bubble-bomb",
    brand: "GLOSS BRO",
    name: "버블밤 고농축 폼클리너 1L",
    discount: 25,
    price: 18500,
    rating: 4.8,
    ratingCount: 1240,
    mainAlt: "여기에 버블밤 고농축 폼클리너 제품 사진 넣으세요",
    mainSrc: "img_001/Highly_Concentrated.png",
    category: "카샴푸",
    tags: ["외부 세차"],
    thumbs: [
      "여기에 버블밤 폼클리너 정면 사진 넣으세요",
      "여기에 폼클리너 거품 분사 장면 사진 넣으세요",
      "여기에 폼클리너 사용 후 차량 광택 사진 넣으세요"
    ],
    tip: "조밀한 거품층이 오염을 감싸 도장면 스크래치를 최소화합니다. 폼캐논 사용 시 물 1:10 비율로 희석하면 풍성한 거품을 얻을 수 있습니다.",
    features: [
      { title: "중성 폼 클렌징", body: "코팅·왁스·실란트에 안전한 pH 중성 포뮬러로 기존 보호층을 손상시키지 않습니다." },
      { title: "강력 거품 밀착", body: "조밀한 거품이 먼지를 캡슐화하여 도장면 손상 없이 오염물을 들어 올립니다." }
    ],
    steps: [
      { title: "희석 및 혼합", body: "폼캐논에 폼클리너 100ml와 물 1L를 1:10 비율로 섞어주세요." },
      { title: "거품 도포", body: "위에서 아래로 골고루 분사합니다. 3~5분 정도 거품이 오염을 불릴 수 있도록 기다려주세요 (마르지 않게 주의)." },
      { title: "고압수 헹굼", body: "고압 세척기를 사용하여 오염물과 거품을 깨끗하게 씻어냅니다." }
    ]
  },
  {
    id: "purestar-towel",
    brand: "PURESTAR",
    name: "슈퍼리치 드라이잉 타월 (L)",
    discount: 10,
    price: 15300,
    rating: 4.9,
    ratingCount: 3520,
    mainAlt: "여기에 슈퍼리치 드라이잉 타월 제품 사진 넣으세요",
    mainSrc: "img_001/Towel.png",
    category: "세차타월",
    tags: ["외부 세차"],
    thumbs: [
      "여기에 드라이잉 타월 접힌 모습 사진 넣으세요",
      "여기에 타월로 차량 물기 제거 장면 사진 넣으세요",
      "여기에 타월 극세사 클로즈업 사진 넣으세요"
    ],
    tip: "물기 제거 전 표면에 코팅제를 가볍게 분사하면 워터스팟을 막고 마찰을 줄여 도장면을 더욱 안전하게 보호할 수 있습니다.",
    features: [
      { title: "초흡수 극세사", body: "1200GSM 고밀도 극세사가 넓은 면적의 물기를 한 번에 흡수해 워터스팟을 방지합니다." },
      { title: "무손상 마감", body: "부드러운 엣지 처리로 도장면과 유리에 스크래치를 남기지 않습니다." }
    ],
    steps: [
      { title: "물기 털기", body: "세차 후 차체에 남은 큰 물방울을 가볍게 흘려보냅니다." },
      { title: "면으로 끌기", body: "타월을 펼쳐 누르듯이 끌어주세요. 문지르지 말고 면으로 흡수시키는 것이 핵심입니다." },
      { title: "디테일 마감", body: "도어 틈·사이드미러 등 좁은 부위의 잔여 물기를 마저 닦아냅니다." }
    ]
  },
  {
    id: "deadshot-wheel",
    brand: "THE CLASS",
    name: "데드샷 휠클리너 500ml",
    discount: 15,
    price: 12750,
    rating: 4.7,
    ratingCount: 890,
    mainAlt: "여기에 데드샷 휠클리너 제품 사진 넣으세요",
    mainSrc: "img_001/Wheel_cleaner.png",
    category: "휠/타이어",
    tags: ["외부 세차"],
    thumbs: [
      "여기에 휠클리너 스프레이 제품 사진 넣으세요",
      "여기에 휠 분진 제거 전후 비교 사진 넣으세요",
      "여기에 휠브러쉬로 세척하는 장면 사진 넣으세요"
    ],
    tip: "분사 후 색이 보라색으로 변하는 것은 철분(브레이크 분진)과 반응하는 신호입니다. 색 변화가 멈추면 충분히 녹았다는 뜻이니 그때 헹궈주세요.",
    features: [
      { title: "철분 반응 포뮬러", body: "고착된 브레이크 분진และ 철분 오염에 반응해 녹이며 색으로 진행 상태를 보여줍니다." },
      { title: "산성 프리 안전", body: "강산이 들어있지 않아 다양한 휠 코팅과 도금 휠에도 안전하게 사용할 수 있습니다." }
    ],
    steps: [
      { title: "휠에 분사", body: "식은 휠 전체에 골고루 분사합니다. 뜨거운 휠에는 사용하지 마세요." },
      { title: "반응 대기", body: "1~3분간 두어 분진과 반응시킵니다. 심한 오염은 휠브러쉬로 가볍게 문질러주세요." },
      { title: "물 헹굼", body: "고압수로 구석구석 헹궈 녹은 오염물을 완전히 제거합니다." }
    ]
  },
  {
    id: "adbl-interior",
    brand: "ADBL",
    name: "인테리어 클리너 체리향 500ml",
    discount: 20,
    price: 14400,
    rating: 4.8,
    ratingCount: 1050,
    mainAlt: "여기에 인테리어 클리너 체리향 제품 사진 넣으세요",
    mainSrc: "img_001/Interior_cleaner.png",
    category: "실내관리",
    tags: ["내부 세차"],
    thumbs: [
      "여기에 인테리어 클리너 스프레이 사진 넣으세요",
      "여기에 대시보드 청소 장면 사진 넣으세요",
      "여기에 시트 청소 장면 사진 넣으세요"
    ],
    tip: "직물 시트는 클리너를 천에 분사한 뒤 닦아내야 얼룩이 남지 않습니다. 가죽에는 전용 보호제를 마무리로 발라주면 좋습니다.",
    features: [
      { title: "다용도 실내 세정", body: "대시보드·시트·도어트림 등 실내 대부분 소재에 사용 가능한 만능 클리너입니다." },
      { title: "은은한 체리향", body: "세정 후 인공적이지 않은 은은한 체리향이 남아 쾌적한 실내 환경을 만듭니다." }
    ],
    steps: [
      { title: "분사", body: "마른 극세사 타월 또는 청소할 표면에 적당량을 분사합니다." },
      { title: "닦기", body: "오염 부위를 부드럽게 닦아냅니다. 심한 곳은 디테일 브러쉬를 함께 사용하세요." },
      { title: "마른 면 마감", body: "깨끗한 마른 면으로 잔여물을 닦아 광택 없이 깔끔하게 마무리합니다." }
    ]
  },
  {
    id: "pro-wheel-brush",
    brand: "PRO TOOL",
    name: "디테일링 휠 브러쉬 세트",
    discount: 15,
    price: 9900,
    rating: 4.9,
    ratingCount: 2110,
    mainAlt: "여기에 디테일링 휠 브러쉬 세트 사진 넣으세요",
    mainSrc: "img_001/Wheel_brush.png",
    category: "휠/타이어",
    tags: ["전문가 도구"],
    thumbs: [
      "여기에 휠 브러쉬 세트 구성 사진 넣으세요",
      "여기에 휠 안쪽 세척 장면 사진 넣으세요",
      "여기에 브러쉬 모 클로즈업 사진 넣으세요"
    ],
    tip: "길이가 다른 브러쉬를 휠 안쪽 깊은 곳부터 사용하면 효율적입니다. 사용 후에는 물로 헹궈 그늘에 말려야 모의 수명이 길어집니다.",
    features: [
      { title: "스크래치 방지 모", body: "부드러운 합성모와 보호캡으로 휠과 도장면에 흠집을 내지 않습니다." },
      { title: "다양한 길이 구성", body: "길이와 굵기가 다른 브러쉬로 휠 안쪽 깊은 곳까지 손쉽게 닿습니다." }
    ],
    steps: [
      { title: "휠클리너 도포", body: "휠에 전용 클리너를 분사해 오염을 미리 불려줍니다." },
      { title: "브러쉬 세척", body: "안쪽 깊은 곳은 긴 브러쉬, 바깥은 짧은 브러쉬로 구석구석 문질러 닦습니다." },
      { title: "헹굼 및 건조", body: "물로 깨끗이 헹군 뒤 브러쉬는 그늘에서 말려 보관합니다." }
    ]
  },
  {
    id: "perfect-foam",
    brand: "PREMIUM",
    name: "초고농축 퍼펙트 폼 카샴푸 1L",
    discount: 20,
    price: 25000,
    rating: 4.9,
    ratingCount: 1205,
    mainAlt: "여기에 초고농축 퍼펙트 폼 카샴푸 제품 사진 넣으세요",
    mainSrc: "img_001/Ultra_Concentrated_Perfect_Car_Shampoo.png",
    category: "카샴푸",
    tags: ["외부 세차"],
    thumbs: [
      "여기에 퍼펙트 폼 카샴푸 제품 사진 넣으세요",
      "여기에 폼 카샴푸 거품 세차 장면 사진 넣으세요",
      "여기에 세차 후 광택 차량 사진 넣으세요"
    ],
    tip: "거울 같은 광택을 위해 투-버킷 세차법을 사용하세요. 미트질 전 폼캐논으로 5분간 프리워시를 진행하면 도장면 손상을 줄일 수 있습니다.",
    features: [
      { title: "pH 중성 포뮬러", body: "모든 코팅, 왁스, 실란트에 안전합니다. 기존의 도장면 보호층을 손상시키지 않습니다." },
      { title: "초고밀도 거품", body: "먼지를 캡슐화하여 도장면 손상을 방지하는 촘촘한 거품층을 형성합니다." }
    ],
    steps: [
      { title: "희석 및 혼합", body: "최상의 결과를 위해 폼캐논에 퍼펙트 폼 50ml와 물 500ml를 섞어주세요." },
      { title: "거품 도포", body: "위에서 아래로 골고루 분사합니다. 3~5분 정도 거품이 때를 불릴 수 있도록 기다려주세요 (마르지 않게 주의)." },
      { title: "고압수 헹굼", body: "고압 세척기를 사용하여 오염물과 거품을 깨끗하게 씻어냅니다." }
    ]
  },
  {
    id: "water-repellent-wax",
    brand: "SOFT TOUCH",
    name: "Water-repellent 물왁스 500mL",
    discount: 20,
    price: 12000,
    rating: 4.8,
    ratingCount: 820,
    mainAlt: "여기에 Water-repellent 물왁스 제품 사진 넣으세요",
    mainSrc: "img_001/Spray_wax.png",
    category: "광택/코팅",
    tags: ["외부 세차"],
    thumbs: [
      "여기에 물왁스 스프레이 제품 사진 넣으세요",
      "여기에 물왁스 발수 효과 사진 넣으세요",
      "여기에 왁스 도포 장면 사진 넣으세요"
    ],
    tip: "세차 후 물기가 남은 젖은 상태에서 분사하면 더 고르게 펴 발립니다. 강한 햇빛 아래나 뜨거운 표면은 피해주세요.",
    features: [
      { title: "즉각 발수 코팅", body: "분사 후 닦아내기만 하면 물방울이 또르르 굴러떨어지는 강력한 발수막을 형성합니다." },
      { title: "광택 부스터", body: "도장면에 깊은 윤기를 더해 세차 후 마무리 광택제로 탁월합니다." }
    ],
    steps: [
      { title: "젖은 차체에 분사", body: "세차 직후 물기가 있는 패널에 한 면씩 고르게 분사합니다." },
      { title: "물로 펼치기", body: "가볍게 물을 흘려 제품이 표면 전체에 퍼지도록 합니다." },
      { title: "물기 제거", body: "드라이잉 타월로 닦아내면 발수 코팅과 광택이 완성됩니다." }
    ]
  },
  {
    id: "glass-coating",
    brand: "INTERIOR",
    name: "유리발수 코팅제 50ml",
    discount: 5,
    price: 24500,
    rating: 4.6,
    ratingCount: 340,
    mainAlt: "여기에 유리발수 코팅제 제품 사진 넣으세요",
    mainSrc: "img_001/youlee.png",
    category: "유리세정",
    tags: ["외부 세차", "광택/코팅"],
    thumbs: [
      "여기에 유리발수 코팅제 제품 사진 넣으세요",
      "여기에 비오는 날 유리 발수 효과 사진 넣으세요",
      "여기에 코팅 도포 장면 사진 넣으세요"
    ],
    tip: "코팅 전 유리의 유분과 기존 코팅을 완전히 제거해야 내구성이 오래갑니다. 도포 후 10분 정도 경화시킨 뒤 마른 면으로 광을 내주세요.",
    features: [
      { title: "선명한 시야 확보", body: "비 오는 날 빗물이 빠르게 흘러내려 와이퍼 없이도 선명한 시야를 유지합니다." },
      { title: "장기 지속력", body: "한 번 시공으로 수개월간 발수 효과가 지속되는 강력한 내구성을 갖췄습니다." }
    ],
    steps: [
      { title: "유리 탈지", body: "유리 클리너로 유분과 오염을 완전히 제거하고 건조시킵니다." },
      { title: "코팅 도포", body: "전용 어플리케이터에 적당량을 묻혀 유리 전체에 얇고 고르게 펴 바릅니다." },
      { title: "경화 및 광내기", body: "10분간 경화시킨 후 마른 극세사로 닦아 코팅막을 완성합니다." }
    ]
  },
  {
    id: "event-bug-cleaner",
    brand: "EVENT",
    name: "노터치 버그클리너 1+1",
    discount: 50,
    price: 9500,
    rating: 4.9,
    ratingCount: 3120,
    mainAlt: "노터치 버그클리너 1+1 이벤트 이미지",
    mainSrc: "img_001/car_001.png",
    category: "카샴푸",
    tags: ["외부 세차", "세트 상품"],
    thumbs: [
      "노터치 버그클리너 상세 이미지 1",
      "노터치 버그클리너 상세 이미지 2"
    ],
    tip: "여름철 눌어붙은 벌레 자국, 문지르지 말고 뿌려만 주세요. 단백질 분해 효소가 벌레 사체를 녹여냅니다.",
    features: [
      { title: "강력한 단백질 분해", body: "도장면 손상 없이 오직 벌레 사체와 새똥만 효과적으로 분해합니다." },
      { title: "1+1 특별 구성", body: "한정 수량으로 제공되는 특별 이벤트 구성입니다." }
    ],
    steps: [
      { title: "분사", body: "벌레 자국이 있는 부위에 충분히 분사해 줍니다." },
      { title: "대기", body: "약 1~2분 정도 오염물이 녹을 때까지 기다립니다." },
      { title: "고압수 세척", body: "고압수나 젖은 타월로 가볍게 씻어냅니다." }
    ]
  },
  {
    id: "event-interior-cleaner",
    brand: "PERFECT",
    name: "퍼펙트 실내클리너 1+1",
    discount: 50,
    price: 16200,
    rating: 4.8,
    ratingCount: 1540,
    mainAlt: "퍼펙트 실내클리너 1+1 이벤트 이미지",
    mainSrc: "img_001/410.png",
    category: "실내관리",
    tags: ["내부 세차", "세트 상품"],
    thumbs: [
      "퍼펙트 실내클리너 상세 이미지 1",
      "퍼펙트 실내클리너 상세 이미지 2"
    ],
    tip: "대시보드부터 시트까지, 묵은때를 한 번에 지워보세요! 실내 전체에 사용 가능한 다목적 클리너입니다.",
    features: [
      { title: "초강력 세정력", body: "찌든 때, 화장품 자국 등 차량 실내의 모든 오염을 완벽하게 제거합니다." },
      { title: "다목적 사용", body: "가죽, 플라스틱, 직물 등 모든 실내 소재에 안전하게 사용 가능합니다." }
    ],
    steps: [
      { title: "분사", body: "오염 부위 또는 타월에 적당량을 분사합니다." },
      { title: "문지르기", body: "부드러운 타월이나 브러쉬로 가볍게 문질러 오염을 제거합니다." },
      { title: "마무리", body: "깨끗한 마른 타월로 잔여물을 닦아냅니다." }
    ]
  },
  {
    id: "event-wax-set",
    brand: "TIGE",
    name: "버킷+ 완벽발수 Tige왁스 + 드라잉타월 SET",
    discount: 30,
    price: 29800,
    rating: 5.0,
    ratingCount: 2050,
    mainAlt: "버킷, Tige왁스, 드라잉타월 SET 이벤트 이미지",
    mainSrc: "img_001/car_003.png",
    category: "광택/코팅",
    tags: ["세트 상품", "외부 세차"],
    thumbs: [
      "Tige왁스 세트 상세 이미지 1",
      "Tige왁스 세트 상세 이미지 2"
    ],
    tip: "세차 입문자부터 전문가까지 필수템만 모았습니다. 한 번의 구매로 완벽한 세차를 준비하세요.",
    features: [
      { title: "완벽 발수 코팅", body: "Tige왁스의 강력한 발수 효과로 비 오는 날에도 깨끗한 시야를 확보하세요." },
      { title: "프리미엄 드라잉타월", body: "잔기스 없이 빠르고 완벽하게 물기를 제거하는 초고밀도 타월입니다." }
    ],
    steps: [
      { title: "버킷 세차", body: "버킷을 활용해 안전하게 세차를 진행합니다." },
      { title: "물기 제거", body: "세차 후 세트에 포함된 드라잉 타월로 물기를 부드럽게 제거합니다." },
      { title: "왁스 시공", body: "Tige 왁스를 도포하고 닦아내어 완벽한 광택과 발수층을 형성합니다." }
    ]
  },
  {
    id: "event-towel-set",
    brand: "EVENT",
    name: "세차타월 (S) 30장 SET",
    discount: 20,
    price: 12000,
    rating: 4.8,
    ratingCount: 1850,
    mainAlt: "세차타월 (S) 30장 SET 이벤트 이미지",
    mainSrc: "img_001/tower_002.png",
    category: "세차타월",
    tags: ["세트 상품", "외부 세차"],
    thumbs: [
      "세차타월 세트 상세 이미지 1",
      "세차타월 세트 상세 이미지 2"
    ],
    tip: "다용도로 활용 가능한 부드러운 초극세사 타월 30장 대용량 세트입니다. 실내외 세차는 물론 다목적으로 사용하세요.",
    features: [
      { title: "초극세사 소재", body: "스크래치를 최소화하는 부드러운 소재로 차량 내외부 어디든 안심하고 사용할 수 있습니다." },
      { title: "30장 대용량", body: "부담 없이 사용하고 교체할 수 있는 넉넉한 30장 세트 구성입니다." }
    ],
    steps: [
      { title: "실외 세차", body: "가벼운 물기 제거나 왁스 버핑 시 사용합니다." },
      { title: "실내 세차", body: "실내 클리너와 함께 대시보드, 시트 등을 닦아줍니다." },
      { title: "세탁", body: "사용 후 오염된 타월은 중성세제로 세탁하여 재사용이 가능합니다." }
    ]
  },
  {
    id: "event-alkaline-cleaner",
    brand: "EVENT",
    name: "효과 최고 알카리성 클리너 1L",
    discount: 50,
    price: 16500,
    rating: 4.9,
    ratingCount: 2150,
    mainAlt: "알카리성 클리너 1L 1+1 이벤트 이미지",
    mainSrc: "img_001/car_004.png",
    category: "카샴푸",
    tags: ["외부 세차", "세트 상품"],
    thumbs: [
      "알카리성 클리너 상세 이미지 1",
      "알카리성 클리너 상세 이미지 2"
    ],
    tip: "강력한 세정력으로 찌든 때, 기름때, 오염을 한 번에 제거합니다. 다양한 부위에 다용도로 사용 가능합니다.",
    features: [
      { title: "강력 세정", body: "도장면과 휠에 고착된 찌든 오염을 빠르고 확실하게 분해합니다." },
      { title: "알카리성 포뮬라", body: "기름때 제거에 탁월한 성능을 발휘하며, 전문가용으로도 손색이 없습니다." }
    ],
    steps: [
      { title: "희석 및 분사", body: "오염도에 맞게 물과 희석한 뒤 오염 부위에 분사합니다." },
      { title: "대기", body: "오염이 분해될 수 있도록 약 1~2분 정도 기다립니다." },
      { title: "세척", body: "고압수나 브러쉬를 이용하여 깨끗하게 헹궈냅니다." }
    ]
  },
  {
    id: "pro-crystal-coating",
    brand: "BUBBLE MATE",
    name: "크리스탈 유리막코팅제 50ml",
    discount: 0,
    price: 84000,
    rating: 4.9,
    ratingCount: 120,
    mainAlt: "크리스탈 유리막코팅제",
    mainSrc: "img_001/Expert_001.png",
    category: "광택/코팅",
    tags: ["전문가 도구", "광택/코팅"],
    thumbs: [
      "img_001/Expert_001.png"
    ],
    tip: "차량 도장면에 얇게 도포한 후 버핑타월로 원을 그리며 닦아주시면 깊은 광택과 초발수 코팅막이 형성됩니다.",
    features: [
      { title: "고경도 코팅막", body: "도장면에 강력한 크리스탈 코팅막을 형성하여 스크래치와 오염을 원천 차단합니다." },
      { title: "초발수 방오력", body: "빗물과 오염물이 도장면에 머물지 않고 흘러내려 세차가 매우 간편해집니다." }
    ],
    steps: [
      { title: "도장면 정리", body: "세차 후 물기를 완전히 제거하고 탈지제를 사용하여 유분을 제거합니다." },
      { title: "코팅제 도포", body: "어플리케이터에 코팅제를 덜어 격자 모양으로 얇고 균일하게 펴 바릅니다." },
      { title: "버핑 마감", body: "도포 후 3~5분 이내에 깨끗한 버핑 타월로 잔여물이 남지 않도록 버핑합니다." }
    ]
  },
  {
    id: "pro-snowfoam-bottle",
    brand: "BUBBLE MATE",
    name: "탈부착 스노우폼 통",
    discount: 0,
    price: 21000,
    rating: 4.8,
    ratingCount: 95,
    mainAlt: "탈부착 스노우폼 통",
    mainSrc: "img_001/snow.png",
    category: "폼건/분무기",
    tags: ["전문가 도구", "폼건/분무기"],
    thumbs: [
      "img_001/snow.png"
    ],
    tip: "고압세척기 랜스에 연결하여 풍성하고 찰진 거품을 만들어 내는 프리미엄 폼랜스 보틀입니다.",
    features: [
      { title: "간편한 탈부착", body: "퀵커플러 방식으로 원터치 탈부착이 가능하여 작업 속도를 획기적으로 줄여줍니다." },
      { title: "내화학성 강화 보틀", body: "고농축 카샴푸나 알칼리성 약재에도 변형되지 않는 특수 강화 플라스틱 재질입니다." }
    ],
    steps: [
      { title: "약재 희석", body: "보틀에 카샴푸와 물을 권장 비율(보통 1:10)로 채워 섞어줍니다." },
      { title: "랜스 결합", body: "고압 세척기 건 끝부분에 퀵 커플러를 이용해 스노우폼 보틀을 장착합니다." },
      { title: "거품 분사", body: "다이얼로 거품 농도를 조절한 뒤 차량 전체에 골고루 분사합니다." }
    ]
  },
  {
    id: "pro-high-sprayer",
    brand: "BUBBLE MATE",
    name: "고압축분무기",
    discount: 0,
    price: 34000,
    rating: 4.7,
    ratingCount: 180,
    mainAlt: "고압축분무기",
    mainSrc: "img_001/rap.png",
    category: "폼건/분무기",
    tags: ["전문가 도구", "폼건/분무기"],
    thumbs: [
      "img_001/rap.png"
    ],
    tip: "휠클리너, APC 등 다양한 세차 약재를 압축 압력으로 안개처럼 미세하고 균일하게 분사해 줍니다.",
    features: [
      { title: "강력한 압축 압력", body: "적은 펌핑으로도 오래 지속되는 강력한 압축력을 제공합니다." },
      { title: "조절 가능한 노즐", body: "분사 각도를 안개 분사부터 직사 분사까지 자유롭게 조절할 수 있습니다." }
    ],
    steps: [
      { title: "약제 주입", body: "분무기 상단 헤드를 열어 약제 또는 희석액을 채워 넣습니다." },
      { title: "압축 펌핑", body: "피스톤 손잡이를 위아래로 반복하여 내부 압력을 충분히 가해 줍니다." },
      { title: "분사 및 사용", body: "레버 버튼을 눌러 필요한 부위에 고르게 분사합니다." }
    ]
  },
  {
    id: "pro-leather-coating",
    brand: "BUBBLE MATE",
    name: "가죽코팅제",
    discount: 0,
    price: 45000,
    rating: 4.9,
    ratingCount: 75,
    mainAlt: "가죽코팅제",
    mainSrc: "img_001/Leather_Coating.png",
    category: "실내관리",
    tags: ["전문가 도구", "실내관리"],
    thumbs: [
      "img_001/Leather_Coating.png"
    ],
    tip: "가죽 시트 표면에 보호막을 형성하여 이염, 갈라짐, 노화를 방지하는 전문가용 가죽 코팅제입니다.",
    features: [
      { title: "이염 및 스크래치 방지", body: "청바지 이염이나 외부 자극으로부터 가죽 본연의 질감을 보호합니다." },
      { title: "자연스러운 매트 광택", body: "번들거림 없이 가죽 순정 상태 고유의 은은하고 고급스러운 매트함을 유지합니다." }
    ],
    steps: [
      { title: "가죽 세정", body: "가죽 클리너를 사용하여 코팅할 표면의 유분과 때를 깨끗이 닦아냅니다." },
      { title: "코팅제 도포", body: "어플리케이터나 타월에 가죽 코팅제를 적당량 묻혀 부드럽게 문지르며 펴 바릅니다." },
      { title: "경화 및 건조", body: "도포 후 약 10~15분 동안 자연 경화시킨 뒤, 마른 타월로 가볍게 잔여물을 정리합니다." }
    ]
  },
  {
    id: "pro-dual-polisher",
    brand: "BUBBLE MATE",
    name: "Mate 5인치 무선 듀얼 광택기",
    discount: 0,
    price: 135000,
    rating: 4.9,
    ratingCount: 88,
    mainAlt: "Mate 5인치 무선 듀얼 광택기",
    mainSrc: "img_001/Specialist.png",
    category: "광택/코팅",
    tags: ["전문가 도구"],
    thumbs: [
      "img_001/Specialist.png"
    ],
    tip: "무선의 자유로움과 강력한 파워를 동시에 느낄 수 있는 전문가용 듀얼 액션 폴리셔입니다.",
    features: [
      { title: "듀얼 액션 방식", body: "안정적인 작업성과 홀로그램 최소화를 실현했습니다." },
      { title: "6단계 속도 조절", body: "도장 상태에 맞는 최적의 rpm 설정이 가능합니다." }
    ],
    steps: [
      { title: "패드 장착", body: "백킹 플레이트 중앙에 맞추어 버핑 패드를 부착합니다." },
      { title: "약재 도포", body: "패드 표면에 광택 약재를 골고루 묻혀줍니다." },
      { title: "광택 작업", body: "저단에서 시작하여 점차 단수를 올리며 가볍게 가압하여 작업합니다." }
    ]
  },
  {
    id: "pro-emerald-wax",
    brand: "BUBBLE MATE",
    name: "슈퍼 에메랄드 발수왁스 500ml",
    discount: 0,
    price: 54000,
    rating: 4.8,
    ratingCount: 104,
    mainAlt: "슈퍼 에메랄드 발수왁스",
    mainSrc: "img_001/Expert_002.png",
    category: "광택/코팅",
    tags: ["전문가 도구"],
    thumbs: [
      "img_001/Expert_002.png"
    ],
    tip: "뿌리고 닦기만 하면 깊은 습식 광택과 최상의 초발수 방오 성능을 보여주는 하이엔드 액체 왁스입니다.",
    features: [
      { title: "강력한 발수력", body: "빗물과 오염물을 튕겨내어 시야 및 도장면 오염을 방지합니다." },
      { title: "선명한 광택", body: "차량 본연의 깊고 선명한 색상을 극대화합니다." }
    ],
    steps: [
      { title: "세차 및 타월 정리", body: "깨끗하게 세차 후 물기를 완전히 닦아냅니다." },
      { title: "왁스 분사", body: "도장면에 가볍게 분사한 후 버핑타월로 원을 그리듯 문지릅니다." },
      { title: "버핑 마감", body: "잔여물이 남지 않도록 깨끗한 면으로 최종 버핑해 줍니다." }
    ]
  },
  {
    id: "pro-glass-pad",
    brand: "BUBBLE MATE",
    name: "유막제거용 5인치 패드",
    discount: 0,
    price: 8500,
    rating: 4.7,
    ratingCount: 62,
    mainAlt: "유막제거용 5인치 패드",
    mainSrc: "img_001/you.png",
    category: "세차타월",
    tags: ["전문가 도구"],
    thumbs: [
      "img_001/you.png"
    ],
    tip: "유리 유막 제거제와 매칭하여 찌든 유막과 물때를 빠르고 확실하게 연마해 주는 전용 패드입니다.",
    features: [
      { title: "강력한 연마력", body: "고밀도 압축 펠트 재질로 제작되어 유막 제거 성능을 향상시킵니다." },
      { title: "우수한 내구성", body: "세척 후 여러 번 재사용이 가능하도록 벨크로와 접착면을 강화했습니다." }
    ],
    steps: [
      { title: "플레이트 결합", body: "5인치 샌더기 또는 백킹 플레이트에 패드를 견고하게 부착합니다." },
      { title: "유막제거제 도포", body: "패드 면에 적당량의 유막제거제를 짜서 분포시킵니다." },
      { title: "유리 연마", body: "적당한 가압으로 유리를 종횡으로 겹쳐 문지르며 유막을 제거합니다." }
    ]
  },
  {
    id: "pro-wool-pad",
    brand: "BUBBLE MATE",
    name: "5인치 양모패드",
    discount: 0,
    price: 12000,
    rating: 4.9,
    ratingCount: 45,
    mainAlt: "5인치 양모패드",
    mainSrc: "img_001/yaumg.png",
    category: "세차타월",
    tags: ["전문가 도구"],
    thumbs: [
      "img_001/yaumg.png"
    ],
    tip: "도장면 스크래치와 깊은 흠집을 빠르게 제거하는 최고급 천연 양모 버핑 패드입니다.",
    features: [
      { title: "천연 양모 소재", body: "도장면의 마찰열을 줄여 주며 강력한 컷팅력을 선사합니다." },
      { title: "탁월한 밸런스", body: "떨림 현상을 줄여 작업자의 손 피로도를 최소화합니다." }
    ],
    steps: [
      { title: "양모 정리", body: "사용 전 패드 브러쉬나 에어로 양모의 먼지와 뭉친 곳을 풀어 줍니다." },
      { title: "컴파운드 도포", body: "패드 면에 컴파운드 약재를 적당량 도포합니다." },
      { title: "컷팅 작업", body: "도장 손상 부위에 대고 적정 rpm으로 가압하며 스크래치를 제거합니다." }
    ]
  }
];

/* ---------- 용량 옵션 (옵션 슬라이드업에서 사용) ---------- */
const VOLUME_OPTIONS = [
  { label: "500ml", add: 0 },
  { label: "1L (+5,000원)", add: 5000 },
  { label: "2L 대용량 (+12,000원)", add: 12000 }
];

/* ---------- 카테고리 9개 ---------- */
const CATEGORIES = [
  { label: "카샴푸",      icon: "M12 2C8 8 6 11 6 15a6 6 0 0 0 12 0c0-4-2-7-6-13z" },
  { label: "폼건/분무기",  icon: "M9 3h6v3l3 2v3H6V8l3-2zM8 11h8v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" },
  { label: "세차타월",     icon: "M4 6h16v12H4zM4 10h16M4 14h16" },
  { label: "광택/코팅",    icon: "M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" },
  { label: "휠/타이어",    icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" },
  { label: "워시미트",     icon: "M5 11V7a3 3 0 0 1 6 0v4M5 11h11a3 3 0 0 1 0 6H8a3 3 0 0 1-3-3z" },
  { label: "유리세정",     icon: "M4 4h16v16H4zM4 4l16 16M20 4L4 20" },
  { label: "실내관리",     icon: "M3 12h18M12 3v18M5 5h14v14H5z" },
  { label: "전체보기",     icon: "M4 6h16M4 12h16M4 18h16" }
];

/* ---------- 리뷰 6개 (포토리뷰) ---------- */
const REVIEWS = [
  { alt: "여기에 차량 도어 닦는 세차 인증샷 넣으세요", stars: 5, src: "img_001/Review_001.jpg", text: "부드러운 타월로 스크래치 없이 물기와 오염을 완벽하게 제거할 수 있어서 너무 좋아요! 흡수력 최고입니다." },
  { alt: "여기에 거품 세차 인증샷 넣으세요", stars: 5, src: "img_001/Review_002.png", text: "거품 세차 후 물기 닦는데 얼룩 하나 안 남고 깔끔하게 마무리되네요. 블랙 차량에도 안심하고 씁니다!" },
  { alt: "여기에 헤드램프 디테일링 인증샷 넣으세요", stars: 5, src: "img_001/Review_003.jpg", text: "유리창 닦을 때 진짜 유용해요. 잔여물이나 거품 자국 없이 투명하고 깨끗하게 닦여서 속이 다 시원합니다." },
  { alt: "여기에 광택 작업 인증샷 넣으세요", stars: 5, src: "img_001/Review_004.jpg", text: "무선 광택기로 작업해보니 유선 제품보다 훨씬 가볍고 회전 속도 조절이 잘 되어서 초보자도 기스 없이 광내기 수월하네요!" },
  { alt: "여기에 발수코팅 작업 인증샷 넣으세요", stars: 5, src: "img_001/Review_005.jpg", text: "에메랄드 발수왁스 발라봤는데, 빗길 주행할 때 물방울이 둥글게 맺혀서 튕겨 날아가는 발수력이 정말 엄청납니다." },
  { alt: "여기에 가죽 코팅 인증샷 넣으세요", stars: 5, src: "img_001/Review_006.jpg", text: "실내 세차용 가죽 코팅제를 사용했더니 시트 촉감이 완전 보들보들해지고 은은한 가죽 향이 솔솔 나서 만족도 200%입니다." }
];

/* ---------- 히어로 배너 슬라이드 ---------- */
const HERO_SLIDES = [
  {
    badge: "NEW ARRIVAL",
    title: ["디테일 필수 세차", "세트 패키지 출시"],
    desc: "전문가가 큐레이션한 스타터 팩으로 집에서도 프로처럼 세차를 시작해보세요. 특별 할인가 적용 중.",
    cta: "자세히 보기",
    alt: "여기에 히어로 배너용 제네시스 차량 사진 넣으세요",
    src: "img_001/g90.jpg"
  },
  {
    badge: "NEW ARRIVAL",
    title: ["디테일링매장 운영전문", "전문가용 광택기 출시"],
    desc: "새로운 광택기 출시가 되었습니다. 일주일간 특별 할인가 적용 중!!",
    cta: "자세히 보기",
    alt: "여기에 히어로 배너용 벤틀리 차량 사진 넣으세요",
    src: "img_001/Bentley.png"
  },
  {
    badge: "BEST SELLER",
    title: ["프로가 인정한", "프리미엄 카샴푸"],
    desc: "초고농축 퍼펙트 폼으로 손상 없이 깊은 광택을. 지금 20% 할인된 가격으로 만나보세요.",
    cta: "자세히 보기",
    alt: "여기에 히어로 배너용 프리미엄 세차 차량 사진 넣으세요",
    src: "img_001/Porsche.png"
  }
];

let PRODUCTS = [];
try {
  const storedProducts = localStorage.getItem("bubble_products");
  if (storedProducts) {
    PRODUCTS = JSON.parse(storedProducts);
  } else {
    PRODUCTS = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    localStorage.setItem("bubble_products", JSON.stringify(PRODUCTS));
  }
} catch(e) {
  PRODUCTS = DEFAULT_PRODUCTS;
}

window.saveProducts = function() {
  localStorage.setItem("bubble_products", JSON.stringify(PRODUCTS));
};
