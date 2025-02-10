// 챔피언 정보 데이터 (아리, 카이사, 리산드라 정보 포함)
const championsData = {
    ahri: {
        name: "아리",
        image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/champion/Ahri.png",
        skills: [
            { name: "패시브", description: "정령의 마음" },
            { name: "Q", description: "정령의 화살" },
            { name: "W", description: "정신 지배" },
            { name: "E", description: "구르기" },
            { name: "R", description: "정령의 분노" }
        ],
        runes: ["주 룬: 마법", "부 룬: 영감", "선택 룬: 마법의 신발, 타락한 권능"],
        spells: ["Flash", "Ignite"],
        items: [
            "시작 아이템: 도란의 반지, 체력 물약",
            "핵심 아이템: 리치베인, 모렐로의 미카",
            "상황 아이템: 존야의 모래시계, 라바돈의 죽음모자"
        ]
    },
    kaisa: {
        name: "카이사",
        image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/champion/Kaisa.png",
        skills: [
            { name: "패시브", description: "치명적인 감염" },
            { name: "Q", description: "초폭풍" },
            { name: "W", description: "공허의 폭발" },
            { name: "E", description: "공허의 가시" },
            { name: "R", description: "공허의 융합" }
        ],
        runes: ["주 룬: 정밀", "부 룬: 지배", "선택 룬: 전설: 핏빛, 치명적인 속도"],
        spells: ["Flash", "Heal"],
        items: [
            "시작 아이템: 도란의 검, 체력 물약",
            "핵심 아이템: 대천사의 포옹, 라바돈의 죽음모자",
            "상황 아이템: 스태틱의 단검, 마나 무효화기"
        ]
    },
    lissandra: {
        name: "리산드라",
        image: "https://ddragon.leagueoflegends.com/cdn/12.2.1/img/champion/Lissandra.png",
        skills: [
            { name: "패시브", description: "얼어붙은 마력" },
            { name: "Q", description: "얼음창" },
            { name: "W", description: "얼음 감옥" },
            { name: "E", description: "얼음의 길" },
            { name: "R", description: "얼음의 손" }
        ],
        runes: ["주 룬: 마법", "부 룬: 결의", "선택 룬: 난입, 부패"],
        spells: ["Flash", "Teleport"],
        items: [
            "시작 아이템: 도란의 반지, 체력 물약",
            "핵심 아이템: 리치베인, 존야의 모래시계",
            "상황 아이템: 라바돈의 죽음모자, 로어의 심연"
        ]
    }
};

// 챔피언 정보를 업데이트하는 함수
function updateChampionInfo() {
    const championName = document.getElementById("champion-dropdown").value;
    const champion = championsData[championName];
    
    if (!champion) {
        console.log("챔피언 정보를 찾을 수 없습니다.");
        return;
    }

    // 이미지 업데이트
    document.getElementById("champion-image").innerHTML = `<img src="${champion.image}" alt="${champion.name}">`;

    // 스킬 업데이트
    const skillsDiv = document.getElementById("skills");
    skillsDiv.innerHTML = ""; // 기존 내용을 초기화
    champion.skills.forEach(skill => {
        const skillElement = document.createElement("p");
        skillElement.innerHTML = `<strong>${skill.name}:</strong> ${skill.description}`;
        skillsDiv.appendChild(skillElement);
    });

    // 룬 업데이트
    const runesDiv = document.getElementById("runes");
    runesDiv.innerHTML = `<h2>추천 룬</h2><ul>`;
    champion.runes.forEach(rune => {
        runesDiv.innerHTML += `<li>${rune}</li>`;
    });
    runesDiv.innerHTML += `</ul>`;

    // 스펠 업데이트
    const spellsDiv = document.getElementById("summoner-spells");
    spellsDiv.innerHTML = `<h2>추천 스펠</h2><ul>`;
    champion.spells.forEach(spell => {
        spellsDiv.innerHTML += `<li><strong>${spell}</strong></li>`;
    });
    spellsDiv.innerHTML += `</ul>`;

    // 아이템 업데이트
    const itemsDiv = document.getElementById("items");
    itemsDiv.innerHTML = `<h2>추천 아이템</h2><ul>`;
    champion.items.forEach(item => {
        itemsDiv.innerHTML += `<li>${item}</li>`;
    });
    itemsDiv.innerHTML += `</ul>`;
}

// 페이지 로딩 시 기본 정보(아리) 표시
window.onload = function() {
    updateChampionInfo();  // 페이지 로딩 시 기본 챔피언 정보가 바로 표시되도록 호출
};
