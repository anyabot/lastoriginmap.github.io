﻿var enemySkillList = {
  "NightChickM_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "미사일 공격",
    "img": "Missile",
    "range": 2,
    "AP": 4,
    "description": "미사일을 발사해 $(1) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickM_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "미사일 집중 공격",
    "img": "Missile",
    "range": 1,
    "AP": 6,
    "description": "미사일 근접 사격으로 $(1.2) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickM_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "목표 록온",
    "img": "Snipe",
    "range": 0,
    "AP": 0,
    "description": "대기 시, 주변의 적을 록온해 2라운드 동안 사거리가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChick_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "머신건 견제 사격",
    "img": "ARShot",
    "range": 3,
    "AP": 4,
    "description": "머신건 견제 사격으로 $(1) 피해를 줍니다. 일정 확률로 2라운드 동안 대상의 회피를 낮츱니다.",
    "areadata": [
      5
    ]
  },
  "NightChick_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "머신건 연사",
    "img": "ARShot",
    "range": 2,
    "AP": 6,
    "description": "머신건을 조준 사격해 $(1.2) 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChick_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "정조준",
    "img": "Snipe",
    "range": 0,
    "AP": 0,
    "description": "대기 시, 적을 조준해 2라운드 동안 적중과 사거리가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickS_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "방패 내려치기",
    "img": "MeleeAttack",
    "range": 2,
    "AP": 4,
    "description": "방패로 내리쳐 $(1) 피해를 줍니다.",
    "areadata": [
      5
    ]
  },
  "NightChickS_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "칙 방패 방어술",
    "img": "SelfDefBuff",
    "range": 6,
    "AP": 3,
    "description": "방패를 올려 3라운드 동안 받는 피해가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickS_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "칙 커버링",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 칙 방패 방어술이 적용된 상태면 바로 뒤에 있는 아군 1기를 보호합니다.",
    "areadata": [
      6
    ]
  },
  "BigChick_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "중 기관총 사격",
    "img": "MGShot",
    "range": 4,
    "AP": 5,
    "description": "중 기관총으로 $(1.2) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "BigChick_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "영거리 중 기관총",
    "img": "MGShot",
    "range": 1,
    "AP": 8,
    "description": "중 기관총 근접 사격으로 $(2) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 방어력 감소 상태인 경우 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Stalker_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "저격",
    "img": "Chargeshot",
    "range": 6,
    "AP": 4,
    "description": "레일건 저격으로 $(1) 피해를 줍니다.",
    "areadata": [
      5
    ]
  },
  "Stalker_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "챠지",
    "img": "SelfAtkBuff",
    "range": 6,
    "AP": 4,
    "description": "레일건을 충전해, 다음 공격이 치명타로 적용되며 일정 라운드 동안 공격력이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Stalker_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "리액터 폭발",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "description": "사망 시, 리액터가 폭발에 주변에 매우 높은 물리 피해를 줍니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "Scout_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "충격 미사일",
    "img": "Missile",
    "range": 2,
    "AP": 6,
    "description": "충격 미사일을 발사해 $(1.2) 피해를 주며, 일정 확률로 대상의 AP를 감소시킵니다.",
    "areadata": [
      5
    ]
  },
  "Scout_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "색적 보고",
    "img": "SelfSpdBuff",
    "range": 6,
    "AP": 8,
    "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
    "areadata": [
      5
    ]
  },
  "Harvester_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "폐기물 분쇄",
    "img": "MeleeAttack",
    "range": 1,
    "AP": 10,
    "description": "근접 공격으로 $(2) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 일정 확률로 2라운드 동안 행동 불가로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "Harvester_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "폐기물 수거",
    "img": "Hang",
    "range": 4,
    "AP": 4,
    "description": "집게로 목표 대상을 포획해 $(0.5) 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 일정 확률로 이동 불가 상태가 됩니다.",
    "areadata": [
      5
    ]
  },
  "NightChickC_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "플레임 버너",
    "img": "WideFireShot",
    "range": 2,
    "AP": 4,
    "attr": "fire",
    "description": "화염 방사로 $(0.8) 화염 속성 피해를 주며, 일정 확률로 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "NightChickC_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "곡사포",
    "img": "CannonShotDelay",
    "range": 5,
    "AP": 8,
    "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 $(1.75)의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
    "areadata": [
      0,
      0.5,
      0,
      0.5,
      1,
      0.5,
      0,
      0.5,
      0
    ]
  },
  "NightChickC_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "연료 탱크 유폭",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "attr": "fire",
    "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주고 피해 감소 효과를 해제합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "FABigChick_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "칙 중 기관포",
    "img": "MGShot",
    "range": 4,
    "AP": 4,
    "description": "기관포로 $(1.5) 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
    "areadata": [
      5
    ]
  },
  "FABigChick_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "듀얼 칙 캐논",
    "img": "CannonShot",
    "range": 2,
    "AP": 7,
    "description": "캐논포를 연사해 목표 열에 $(1.25) 피해를 줍니다. 피해 감소 효과를 무효화합니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "FABigChick_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "칙 반응 장갑",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "반응 장갑으로 인해 받는 피해가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "Predator_B0208_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "후려치기",
    "img": "MeleeAttack",
    "range": 1,
    "AP": 3,
    "description": "대상을 강타해 $(1.6) 피해를 주고, 1칸 뒤로 밀어내며 일정 확률로 2라운드 동안 행동 불가 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "Predator_B0208_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "부식 용액",
    "img": "TeamDefDeBuff",
    "range": 3,
    "AP": 3,
    "description": "부식 용액으로 목표 대상들에게 $(0.5) 피해를 주며, 2라운드 동안 부식 상태로 만듭니다. 부식 상태인 대상은 방어력과 행동력이 감소하며, 지속 물리 피해를 입습니다. 보호 효과를 무시합니다.",
    "areadata": [
      4,
      5,
      6
    ]
  },
  "Predator_B0208_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "생존 본능",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "HP 25% 이하가 되면 받는 피해가 감소하며, 행동력 / 적중 / 효과 저항이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Predator_B0208_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "마무리 공격",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "생존 본능이 발동한 상태로 공격하는 경우, 방어막과 피해 감소 효과를 무시하며 대상의 방어력을 일정 비율 무시합니다.",
    "areadata": [
      5
    ]
  },
  "Predator_B0208_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "멈출 수 없는 본능",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 일정 확률로 이동 불가 / 행동 불가 / 행동력 감소 효과를 해제합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickSI_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "방패 강타",
    "img": "MeleeAttack",
    "range": 3,
    "AP": 4,
    "description": "방패로 강타해 $(1.1000000000000001) 피해를 줍니다. 대상이 회피 감소 상태면 일정 확률로 행동 불가로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "NightChickSI_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "칙 가드 올리기",
    "img": "ShieldWall",
    "range": 6,
    "AP": 3,
    "description": "3라운드 동안 같은 행의 뒤에 있는 아군을 보호합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickSI_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "강화 방패",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "방패 장갑이 강화되어 받는 피해가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "Legion_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "GAU 미니건",
    "img": "ARShot",
    "range": 4,
    "AP": 4,
    "description": "미니건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Legion_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "점착탄",
    "img": "SlowShot",
    "range": 4,
    "AP": 5,
    "description": "점착탄을 던져 $(0.33) 피해를 줍니다. 적중한 대상을 2라운드 동안 이동 불가 상태로 만들고, 일정 확률로 회피 / 행동력을 감소 시킵니다.",
    "areadata": [
      5
    ]
  },
  "Legion_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "경계 태세",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "아군이 처치되면  경계 태세로 전환해, 양 옆의 아군의 행동력을 감소시키며 대상의 공격을 지원합니다.",
    "areadata": [
      8,
      2
    ]
  },
  "Zapper_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "전격 방사",
    "img": "Shock",
    "range": 3,
    "AP": 4,
    "attr": "electric",
    "description": "전격을 방사해 $(0.8) 전기 속성 피해를 주고 일정 확률로 대상의 회피와 AP를 감소시킵니다.",
    "areadata": [
      5
    ]
  },
  "Zapper_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "고압 전류",
    "img": "Shock",
    "range": 1,
    "AP": 8,
    "attr": "electric",
    "description": "고압 전류로 $(1.2) 전기 속성 피해를 주고, 일정 확률로 대상을 행동 불능 상태로 만들고 회피를 감소시킵니다.",
    "areadata": [
      5
    ]
  },
  "Zapper_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "경계 모드",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "적과 인접하거나 공격당하기 전까지 경계 상태로 대기합니다. 공격당하기 전까지 받는 피해와 행동력이 감소합니다.",
    "areadata": [
      5
    ]
  },
  "Phalangites_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "머신건 속사",
    "img": "ARShot",
    "range": 4,
    "AP": 4,
    "description": "머신건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Phalangites_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "대열 방어",
    "img": "TeamDefBuff",
    "range": 6,
    "AP": 4,
    "description": "3라운드 동안 같은 열의 아군을 보호하며, 받는 피해가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "Phalangites_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "밀집 대형",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 같은 열에 인접한 아군에게 피해 감소 효과를 부여합니다. 해당 효과는 중첩됩니다.",
    "areadata": [
      8,
      2
    ]
  },
  "Centurion_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "XM 유탄 발사기",
    "img": "GrenadeAttack_2",
    "range": 4,
    "AP": 6,
    "description": "유탄을 발사해 목표 행에 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
    "areadata": [
      4,
      5,
      6
    ]
  },
  "Centurion_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "일제 공격 개시",
    "img": "Snipe",
    "range": 5,
    "AP": 4,
    "description": "2라운드 동안 대상을 목표로 지정해 $(0.25) 피해를 주고 표식을 남기며, 받는 피해가 증가하는 상태로 만듭니다. 보호 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "Centurion_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "반격 태세",
    "img": "DefCounter",
    "range": 0,
    "AP": 0,
    "description": "아군 사망 시, 3라운드 동안 공격력과 치명타가 증가하며 반격합니다. 공격력과 치명타 증가 효과는 중첩됩니다.",
    "areadata": [
      5
    ]
  },
  "HeavyScout_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "대 장갑 기관포",
    "img": "AntiArmorShot",
    "range": 2,
    "AP": 6,
    "description": "대 장갑 기관포를 발사해 $(1.2) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 방어 감소 상태인 경우 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "HeavyScout_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "공습 준비",
    "img": "SelfSpdBuff",
    "range": 6,
    "AP": 5,
    "description": "3라운드 동안 회피 / 치명타 / 행동력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "HeavyScout_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "공격 포메이션",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "대기 시, 같은 열에 인접한 공격기의 AP / 치명타 / 사거리 / 방어 관통을 증가시킵니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "Kidnapper_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "클로 돌진",
    "img": "AssaultAttack",
    "range": 4,
    "AP": 4,
    "description": "클로 돌진으로 목표와 바로 뒤의 대상에게 $(1) 피해를 줍니다. 5라운드 동안 공격 대상의 방어력을 감소시킵니다. 최대 5번까지 중첩됩니다.",
    "areadata": [
      4,
      5
    ]
  },
  "Kidnapper_CH_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "광란의 학살",
    "img": "AssaultAttack",
    "range": 5,
    "AP": 4,
    "description": "순식간에 대상에게 접근해 $(1.6) 피해를 줍니다. 방어막 / 피해 감소 / 보호 효과를 무시하며, 대상의 HP가 낮을수록 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Kidnapper_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "살육 쾌감",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "도발 상태일 때 공격 적중 시, 5라운드 동안 공격력이 증가합니다. 해당 효과는 5번까지 중첩됩니다.",
    "areadata": [
      5
    ]
  },
  "Kidnapper_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "위협 감지",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 위협을 감지해 해당 라운드 동안 회피가 증가하며 공격력이 감소합니다. 해당 효과는 중첩됩니다.",
    "areadata": [
      5
    ]
  },
  "Kidnapper_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "광란",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "적을 처치한 경우, 3라운드 동안 행동력과 치명타가 증가합니다. 해당 효과는 중첩됩니다.",
    "areadata": [
      5
    ]
  },
  "NightChickSP_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "정조준 저격",
    "img": "Snipe",
    "range": 4,
    "AP": 7,
    "description": "보호 효과를 무시하는 저격으로 $(1.5) 피해를 줍니다. 대상이 이동 불가 상태면 정밀 사격으로 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickSP_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "위장",
    "img": "SelfSpdBuff",
    "range": 6,
    "AP": 4,
    "description": "위장 파장을 발산해 3라운드 동안 회피 / 치명타가 증가하며 받는 피해가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickSP_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "대응 저격",
    "img": "DefCounter",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 위장 상태인 경우 반격을 활성화합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickDE_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "약점 포착",
    "img": "ARShot",
    "range": 4,
    "AP": 4,
    "description": "목표를 공격 대상으로 지정해 $(1) 피해를 주고, 2라운드 동안 표식 상태로 만듭니다. 표식 상태인 대상인 추가 피해를 받으며, 회피가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickDE_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "섬광 탄막",
    "img": "Beam",
    "range": 4,
    "AP": 7,
    "description": "지정한 위치에 섬광탄을 발사해 2라운드 동안 적중을 낮추고, 대상의 AP를 감소시킵니다.",
    "areadata": [
      4,
      5
    ]
  },
  "NightChickDE_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "레이더 공유",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 일정 확률로 인접한 아군에게 경보를 울리며 전황을 공유합니다. 레이더를 공유 받은 경우, AP가 증가하며 2라운드 동안 사거리와 적중률이 증가합니다.",
    "areadata": [
      8,
      4,
      6,
      2
    ]
  },
  "NightChickDE_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "레이더 재밍",
    "img": "TeamAtkDeBuff",
    "range": 0,
    "AP": 0,
    "description": "자신이 사망하는 경우, 주변 철충의 센서에 오류를 일으킵니다. 오류가 일어난 대상들은 적중이 크게 감소하며, 적중 강화 효과가 해제됩니다.",
    "areadata": [
      8,
      4,
      6,
      2
    ]
  },
  "Wasp_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "화염 방사",
    "img": "WideFireShot",
    "range": 3,
    "AP": 6,
    "attr": "fire",
    "description": "화염 방사로 대상에게 $(0.75) 피해를 주고, 대상 뒤에 50% 감소한 피해를 줍니다. 일정 확률로 대상을 점화 상태로 만들어 3라운드 동안 지속 화염 피해를 줍니다.",
    "areadata": [
      0,
      0,
      0,
      0.5,
      1,
      0,
      0,
      0,
      0
    ]
  },
  "Wasp_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "자폭 돌격",
    "img": "SuiceideBomb",
    "range": 6,
    "AP": 10,
    "description": "공격 대상에게 자폭해 $(5) 피해를 줍니다. 대상의 방어력을 무시합니다.",
    "areadata": [
      5
    ]
  },
  "Wasp_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "회피 기동",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "아군이 사망한 경우, 2라운드 동안 회피가 증가하며 행동력과 적중이 감소합니다. 해당 효과는 최대 3번까지 중첩됩니다.",
    "areadata": [
      5
    ]
  },
  "NightChickCM_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "화학탄 발사",
    "img": "Missile",
    "range": 4,
    "AP": 4,
    "description": "화학 탄두를 발사해 $(0.8) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
    "areadata": [
      5
    ]
  },
  "NightChickCM_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "화학탄 난사",
    "img": "MultiMissile",
    "range": 2,
    "AP": 6,
    "description": "화학 탄두를 난사해 지정 범위에 $(0.5) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "NightChickCM_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "적응 시스템",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "Scarab_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "실드 돌격",
    "img": "AssaultAttack",
    "range": 3,
    "AP": 6,
    "description": "대상에게 돌격해 $(1.5) 피해를 주고, 대상의 행 보호 효과와 피해 감소 효과를 해제합니다.",
    "areadata": [
      5
    ]
  },
  "Scarab_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "보호 기동",
    "img": "SelfDefBuff",
    "range": 6,
    "AP": 4,
    "description": "3라운드 동안 지정한 아군을 보호하고 행동력을 올려줍니다.",
    "areadata": [
      5
    ]
  },
  "Scarab_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "방어 기동",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "HP가 50% 이하가 되면 방어 기동을 실행해, 받는 피해가 감소하고 방어력이 증가하며 회피가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "Raider_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "교란 파동",
    "img": "TeamAtkDeBuff",
    "range": 4,
    "AP": 8,
    "description": "목표 범위에 보호 효과를 무시하는 교란 파동을 발사해 $(0.25) 피해를 주고, 3라운드 동안 대상의 사거리 / 적중 / 치명타를 감소시킵니다. 일정 확률로 대상에게 걸려있는 강화 효과를 해제합니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "Raider_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "반응 폭탄 투하",
    "img": "AirStrike",
    "range": 4,
    "AP": 6,
    "description": "목표 지점에 폭탄을 투하해 보호 효과를 무시하고 $(1.2) 피해를 줍니다. 목표 지점 주변은 피해가 50% 감소하며, 치명타 적중 시 피해량이 증가합니다.",
    "areadata": [
      0,
      0.5,
      0,
      0.5,
      1,
      0.5,
      0,
      0.5,
      0
    ]
  },
  "Raider_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "교신 프로토콜",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "경계 상태로 라운드 개시 시, 인접한 철충들의 적중 감소 효과를 해제하고 적중 / 회피 / 치명타를 증가시킵니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "Raider_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "명령 프로토콜",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "자신의 HP가 50% 이하 상태에서 피격된 경우, 주변 철충들에게 요격 명령을 내려 AP를 증가시킵니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "Raider_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "경계",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "통솔하는 철충이 처치된 경우, 경계 상태가 되어 2라운드 동안 행동력과 회피가 증가합니다. 해당 효과는 중첩됩니다.",
    "areadata": [
      5
    ]
  },
  "Raider_CH_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "플라즈마 광탄",
    "img": "Shock",
    "range": 5,
    "AP": 7,
    "attr": "electric",
    "description": "전격구를 발사해 $(1.5) 전기 속성 피해를 줍니다. 대상이 감전 상태면 회피를 감소시키며, 일정 확률로 행동 불능 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "Raider_CH_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "광탄 난사",
    "img": "WideLightning",
    "range": 5,
    "AP": 5,
    "attr": "electric",
    "description": "방전 공격으로 보호 효과를 무시하고 $(0.5) 전기 속성 피해를 줍니다. 일정 확률로 대상을 감전시켜 3라운드 동안 행동력과 회피를 낮춥니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "NightChickMEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "강화 미사일 공격",
    "img": "Missile",
    "range": 2,
    "AP": 4,
    "description": "미사일을 발사해 $(1.2) 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickMEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "강화 미사일 난사",
    "img": "Missile",
    "range": 1,
    "AP": 6,
    "description": "미사일 근접 사격으로 $(1.6) 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickMEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "기동 사격",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "이동 시, 4라운드 동안 사거리 / 공격력 / 행동력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "강화 머신건 사격",
    "img": "ARShot",
    "range": 4,
    "AP": 4,
    "description": "머신건 사격으로 $(1) 피해를 줍니다. 2라운드 동안 대상의 회피를 낮츱니다.",
    "areadata": [
      5
    ]
  },
  "NightChickEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "강화 머신건 연사",
    "img": "ARShot",
    "range": 1,
    "AP": 6,
    "description": "머신건을 조준 사격해 $(1.4) 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "칙 정밀 조준",
    "img": "Snipe",
    "range": 0,
    "AP": 0,
    "description": "대기 시, 3라운드 동안 적중 / 사거리 / 치명타가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "ScoutEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "강화 충격탄",
    "img": "Missile",
    "range": 2,
    "AP": 6,
    "description": "충격 미사일을 발사해 $(1.2) 피해를 주고 대상의 AP를 감소시킵니다.",
    "areadata": [
      5
    ]
  },
  "ScoutEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "색적 경보",
    "img": "Scan",
    "range": 6,
    "AP": 6,
    "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
    "areadata": [
      5
    ]
  },
  "ScoutEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "강습 대열",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "이동 시, 3라운드 동안 인접한 공격기의 공격을 지원하며 AP를 증가시킵니다.",
    "areadata": [
      8,
      2
    ]
  },
  "HarvesterEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "폐기물 파쇄",
    "img": "MeleeAttack",
    "range": 1,
    "AP": 9,
    "description": "근접 공격으로 $(2.6) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 2라운드 동안 행동 불가로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "HarvesterEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "폐기물 수집",
    "img": "Hang",
    "range": 4,
    "AP": 4,
    "description": "집게로 목표 대상을 포획해 $(0.5) 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 이동 불가 상태가 됩니다.",
    "areadata": [
      5
    ]
  },
  "HarvesterEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "초합금 플레이팅",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "견고한 장갑으로 인해, 일정 위력 이하의 공격은 통하지 않습니다.",
    "areadata": [
      5
    ]
  },
  "NightChickCEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "네이팜 분사",
    "img": "WideFireShot",
    "range": 2,
    "AP": 4,
    "attr": "fire",
    "description": "화염 방사로 $(1.1000000000000001) 화염 속성 피해를 주며, 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "NightChickCEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "강화 곡사 포격",
    "img": "CannonShotDelay",
    "range": 6,
    "AP": 7,
    "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 $(2)의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
    "areadata": [
      0,
      0.75,
      0,
      0.75,
      1,
      0.75,
      0,
      0.75,
      0
    ]
  },
  "NightChickCEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "연료 탱크 파괴",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "attr": "fire",
    "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주며 피해 감소 효과를 해제합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "NightChickCEX_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "조준 보정",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 3라운드 동안 적중이 증가합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "FABigChickEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "강화 중 기관포",
    "img": "MGShot",
    "range": 4,
    "AP": 4,
    "description": "중 기관포로 $(1.6) 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
    "areadata": [
      5
    ]
  },
  "FABigChickEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "듀얼 칙 캐논포",
    "img": "CannonShotWide",
    "range": 2,
    "AP": 6,
    "description": "캐논포를 연사해 목표 열에 $(1.35) 피해를 줍니다. 대상의 피해 감소 효과를 해제합니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "FABigChickEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "빅 칙 반응 장갑",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "반응 장갑으로 인해 받는 피해가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "FABigChickEX_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "작열탄두",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "작열탄두를 장비해 경장형에게 주는 피해가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "BigChickM_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "고폭 미사일",
    "img": "CruiseMissile",
    "range": 5,
    "AP": 7,
    "description": "1라운드 후 착탄하며 $(3) 피해를 주는 미사일을 발사합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "BigChickM_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "마이크로 미사일",
    "img": "MultiMissile",
    "range": 1,
    "AP": 3,
    "description": "지정 범위에 $(0.5) 피해를 주는 마이크로 미사일을 발사합니다. 보호 효과를 무시하며 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다. 200%의 적중 보정이 적용됩니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "BigChickM_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "유도 미사일",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 대상이 기동형인 경우, 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "BigChickEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "칙 중 기관포 발사",
    "img": "MGShot",
    "range": 4,
    "AP": 5,
    "description": "중 기관총으로 $(1.5) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "BigChickEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "영거리 중 기관포",
    "img": "MGShot",
    "range": 1,
    "AP": 8,
    "description": "중 기관총 근접 사격으로 방어력을 일정 비율 무시하고 $(2.4) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "BigChickEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "근접 조준 사격",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "적 진영에 가까울수록, 라운드 개시 시 적중이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Juggernaut_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "스턴 펀치",
    "img": "MeleeAttack",
    "range": 1,
    "AP": 10,
    "description": "대상을 강타해 $(2.4) 피해를 주고, 일정 확률로 행동 불가 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "Juggernaut_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "몸통 박치기",
    "img": "AssaultAttack",
    "range": 2,
    "AP": 9,
    "description": "대상에게 돌진해 $(1.6) 피해를 주고, 뒤로 1칸 밀어냅니다.",
    "areadata": [
      5
    ]
  },
  "Juggernaut_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "방벽 전환",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "아군이 사망한 경우, 방어 태세로 전환해 2라운드 동안 행 보호와 열 보호 효과를 활성화합니다.",
    "areadata": [
      5
    ]
  },
  "Juggernaut_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "방어 프로토콜",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 일정 확률로 방어력이 대폭 증가합니다.",
    "areadata": [
      5
    ]
  },
  "LegionEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "GAU 대공 미니건",
    "img": "ARShot",
    "range": 4,
    "AP": 4,
    "description": "미니건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "LegionEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "강화 점착탄",
    "img": "SlowShot",
    "range": 4,
    "AP": 5,
    "description": "점착탄을 던져 $(0.4) 피해를 주고, 일정 확률로 적중한 대상을 3라운드 동안 이동 불가 / 회피 / 행동력 감소 상태로 만듭니다. 일정 확률로 대상의 회피 / 행동력 강화 효과를 해제합니다.",
    "areadata": [
      5
    ]
  },
  "LegionEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "경계 경보",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "아군이 처치되면 경계 태세로 전환해 양 옆의 아군의 행동력을 올려주며 대상의 공격을 지원합니다.",
    "areadata": [
      8,
      2
    ]
  },
  "CenturionEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "XM 로켓 런쳐",
    "img": "GrenadeAttack_2",
    "range": 4,
    "AP": 6,
    "description": "유탄을 발사해 목표 대상들에게 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
    "areadata": [
      4,
      5,
      6
    ]
  },
  "CenturionEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "일제 공격 표식",
    "img": "Scan",
    "range": 5,
    "AP": 3,
    "description": "2라운드 동안 대상을 목표로 지정해 $(0.3) 피해를 주고 표식을 남기며, 받는 피해가 증가하는 상태로 만듭니다. 보호 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "CenturionEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "역습 태세",
    "img": "DefCounter",
    "range": 0,
    "AP": 0,
    "description": "아군 사망 시, 3라운드 동안 공격력과 치명타가 증가하며 반격합니다.",
    "areadata": [
      5
    ]
  },
  "CenturionEX_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "부대 재 정비",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시 역습 태세인 경우, 인접한 아군들의 행동력과 적중을 증가시킵니다.",
    "areadata": [
      8,
      4,
      6,
      2
    ]
  },
  "ZapperEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "전격 체인",
    "img": "Shock",
    "range": 3,
    "AP": 4,
    "attr": "electric",
    "description": "전격을 방사해 $(0.8) 전기 속성 피해를 주고 대상의 AP와 회피를 감소시킵니다.",
    "areadata": [
      5
    ]
  },
  "ZapperEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "초고압 전류",
    "img": "Shock",
    "range": 1,
    "AP": 8,
    "attr": "electric",
    "description": "고압 전류로 $(1.2) 전기 속성 피해를 주고, 회피를 감소시킵니다. 일정 확률로 대상을 행동 불가 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "ZapperEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "사주 경계",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "적을 발견하거나 적에게 공격당하기 전 까지는 경계 상태로 대기합니다. 공격당하기 전까지 받는 피해가 대폭 감소합니다.",
    "areadata": [
      5
    ]
  },
  "Mammoth_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "직사 포격",
    "img": "CannonShotWide",
    "range": 2,
    "AP": 7,
    "description": "직사 포격으로 목표 대상이 있는 열에 $(1.35) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "Mammoth_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "2연장 곡사포",
    "img": "CannonShotDelay",
    "range": 6,
    "AP": 9,
    "description": "1라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 $(2.5) 보호 무시 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
    "areadata": [
      0,
      0.75,
      0,
      0.75,
      1,
      0.75,
      0,
      0.75,
      0
    ]
  },
  "Mammoth_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "고폭 충격탄",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 적의 방어막과 피해 감소 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "Kidnapper_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "손톱날 발사",
    "img": "MultiMissile",
    "range": 1,
    "AP": 6,
    "attr": "fire",
    "description": "폭발하는 손톱날을 발사해 목표 열에 $(1.4) 피해를 주고 대상을 뒤로 한칸 밉니다. 공격 대상들은 2라운드 동안 적중이 감소합니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "Stalker_TU2_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "챠지",
    "img": "SelfAtkBuff",
    "range": 6,
    "AP": 4,
    "description": "레일건을 충전해, 다음 공격이 치명타로 적용되며 공격력이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "WaspEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "화염 작렬",
    "img": "WideFireShot",
    "range": 3,
    "AP": 6,
    "attr": "fire",
    "description": "화염 방사로 대상에게 $(0.8) 피해를 주고, 대상 뒤에 50% 감소한 피해를 줍니다. 대상을 점화 상태로 만들어 2라운드 동안 지속 화염 피해를 줍니다.",
    "areadata": [
      0,
      0,
      0,
      0.5,
      1,
      0,
      0,
      0,
      0
    ]
  },
  "WaspEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "자폭 돌진",
    "img": "SuiceideBomb",
    "range": 7,
    "AP": 10,
    "description": "공격 대상에게 돌격 후, 자폭해 $(6) 피해를 줍니다. 대상의 방어력을 무시합니다.",
    "areadata": [
      5
    ]
  },
  "WaspEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "고속 기동",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "아군이 사망한 경우, 2라운드 동안 회피가 증가하며 행동력 / 적중이 감소합니다. 해당 효과는 중첩됩니다.",
    "areadata": [
      5
    ]
  },
  "HarvesterEX_TU3_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "초합금 플레이팅",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "견고한 장갑으로 인해, 일정 위력 이하의 공격은 통하지 않습니다.",
    "areadata": [
      5
    ]
  },
  "ScarabEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "실드 돌진",
    "img": "AssaultAttack",
    "range": 3,
    "AP": 6,
    "description": "대상에게 돌격해 $(1.5) 피해를 주고, 대상의 행 / 열 보호 효과와 피해 감소 효과를 해제합니다.",
    "areadata": [
      5
    ]
  },
  "ScarabEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "호위 기동",
    "img": "SelfDefBuff",
    "range": 6,
    "AP": 4,
    "description": "3라운드 동안 지정한 아군을 보호하며, 대상의 행동력과 적중을 증가시킵니다.",
    "areadata": [
      5
    ]
  },
  "ScarabEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "경계 기동",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시 HP가 50% 이하인 경우, 받는 피해와 회피가 감소하고 방어력이 대폭 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Fallen_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "머신건 사격",
    "img": "MGShot",
    "range": 4,
    "AP": 4,
    "description": "머신건을 발사해 목표 적에게 $(1)의 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Fallen_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "대 장갑 진동탄",
    "img": "SelfDefDeBuff",
    "range": 4,
    "AP": 6,
    "description": "대 장갑 진동탄을 발사해 $(0.25) 피해를 주고, 목표 대상의 방어력을 낮춥니다. 대상에게 피해 감소 효과가 있는 경우, 해당 효과를 무효화합니다.",
    "areadata": [
      5
    ]
  },
  "Rampart_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "목표 견제",
    "img": "ARShot",
    "range": 3,
    "AP": 4,
    "description": "위협 사격으로 $(1) 피해를 주고, 2라운드 동안 대상의 공격력과 적중을 낮춥니다.",
    "areadata": [
      5
    ]
  },
  "Rampart_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "목표 호위",
    "img": "ShieldWall",
    "range": 6,
    "AP": 6,
    "description": "3라운드 동안 지정한 아군을 보호하며, 대상의 AP를 증가시킵니다. 해당 스킬 사용 시, 자신이 받는 피해가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "Drone_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "충격파 미사일",
    "img": "Missile",
    "range": 3,
    "AP": 5,
    "description": "충격파 미사일을 발사해 $(1.1000000000000001) 피해를 주고, 대상을 뒤로 1칸 밀어내며 AP를 감소시킵니다.",
    "areadata": [
      5
    ]
  },
  "Drone_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "정밀 스캔",
    "img": "Scan",
    "range": 1,
    "AP": 7,
    "description": "목표 지점에 있는 대상들의 약점을 분석해, 3라운드 동안 받는 피해를 증가시키며 효과 저항과 회피를 감소시킵니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "AMG11_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "목표 경보",
    "img": "ARShot",
    "range": 5,
    "AP": 4,
    "description": "대상을 표식 설정하며 $(1) 피해를 줍니다. 3라운드 동안 대상은 받는 피해가 증가하며, 회피가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "AMG11_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "지원 개시",
    "img": "SelfAtkBuff",
    "range": 6,
    "AP": 6,
    "description": "3라운드 동안 지정한 아군의 공격을 지원하며, 대상의 행동력을 높입니다.",
    "areadata": [
      5
    ]
  },
  "PuppHead_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "테이저 발사",
    "img": "Shock",
    "range": 2,
    "AP": 4,
    "attr": "electric",
    "description": "목표 적을 감전시켜 $(0.75)의 전기 속성 피해를 주고 AP와 회피를 감소시킵니다.",
    "areadata": [
      5
    ]
  },
  "PuppHead_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "체포 사슬",
    "img": "Hang",
    "range": 4,
    "AP": 4,
    "description": "목표 대상을 체포해 $(0.01) 피해를 주면서 최대 2칸까지 앞으로 당기고, 3라운드 동안 이동 불가 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "Stinger_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "네이팜 버너",
    "img": "WideFireShot",
    "range": 2,
    "AP": 5,
    "attr": "fire",
    "description": "화염 방사로 $(0.75) 피해를 주고, 뒤의 대상에게는 50% 감소한 피해를 줍니다. 3라운드 동안 대상을 점화 상태로 만들어 지속 화염 피해를 줍니다.",
    "areadata": [
      0,
      0,
      0,
      0.5,
      1,
      0,
      0,
      0,
      0
    ]
  },
  "Stinger_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "파쇄 돌격",
    "img": "AssaultAttack",
    "range": 3,
    "AP": 7,
    "description": "목표 대상에게 돌격해 $(1.4) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 표식 상태인 경우 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Stinger_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "예열 개시",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "이동 시, 3라운드 동안 공격력 / 행동력 / 회피가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Gigantes_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "로켓 배쉬",
    "img": "MeleeAttack",
    "range": 1,
    "AP": 9,
    "description": "대상을 강타해 $(1.8) 피해를 주고, 일정 확률로 해당 라운드 동안 행동 불가 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "Gigantes_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "실드 차지",
    "img": "AssaultAttack",
    "range": 2,
    "AP": 7,
    "description": "대상에게 돌진해 $(1.3) 피해를 주고, 뒤로 1칸 밀며 대상에게 걸린 행 보호 또는 열 보호 효과를 해제합니다.",
    "areadata": [
      5
    ]
  },
  "Gigantes_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "거점 방어 모드",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시, 3라운드 동안 행 보호 효과를 활성화하며 방어력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Seljuq_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "175mm 직사포",
    "img": "CannonShotWide",
    "range": 2,
    "AP": 7,
    "description": "직사 포격으로 목표 대상이 있는 열에 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "Seljuq_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "175mm 곡사포",
    "img": "CannonShotDelay",
    "range": 6,
    "AP": 10,
    "description": "2라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 $(2) 보호 무시 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 표식 상태인 대상에게는 피해량이 증가합니다.",
    "areadata": [
      0,
      0.5,
      0,
      0.5,
      1,
      0.5,
      0,
      0.5,
      0
    ]
  },
  "Seljuq_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "대 보병 고폭탄",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "대 보병 고폭탄을 장전해, 경장형에게 주는 피해가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherSensor_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "록 온 센서",
    "img": "Scan",
    "range": 8,
    "AP": 4,
    "description": "목표 대상을 조준해 3라운드 동안 표식을 설정하고, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherSensor_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "다중 록 온 시스템",
    "img": "Scan",
    "range": 8,
    "AP": 6,
    "description": "목표 대상들을 조준해 3라운드 동안 표식을 설정하고, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "UnderWatcherSensor_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "조준 보정 시스템",
    "img": "Scan",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 자신의 현재 HP 비율에 따라 주변 장치에게 적중 증가 효과를 줍니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "UnderWatcherSensor_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "최대 출력",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "에너지 충전 중첩이 3 이상이면, 방해 효과를 걸 확률이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcher_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "확산 플라즈마 입자포",
    "img": "WideBeamShot",
    "range": 5,
    "AP": 3,
    "description": "지정 범위에 보호 효과를 무시하고 $(0.6) 피해를 주는 확산 입자포를 발사합니다. 표식 상태인 대상에게 피해량이 증가합니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "UnderWatcher_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "메가 플라즈마 캐논",
    "img": "BeamShot",
    "range": 8,
    "AP": 10,
    "description": "지정 행에 $(2) 피해를 주는 플라즈마 입자포를 발사합니다. 보호 효과를 무시하며, 표식 상태인 대상에게 피해량이 크게 증가합니다.",
    "areadata": [
      4,
      5,
      6
    ]
  },
  "UnderWatcher_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "특수 합금 발사구",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시 에너지 충전 상태인 경우, 공격하기 전까지는 방어력과 효과 저항이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcher_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "최대 출력",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "에너지 충전 중첩이 4 이상이면, 공격할 때 방어막과 피해 감소 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcher_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "시스템 정지",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "description": "사망할 경우, 관련된 모든 시스템이 정지합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "UnderWatcherGenerator_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "에너지 충전",
    "img": "SelfAtkBuff",
    "range": 6,
    "AP": 4,
    "description": "각 장치들에게 에너지를 전달해, 공격력을 증가시킵니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      1,
      2,
      3
    ]
  },
  "UnderWatcherGenerator_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "에너지 실드",
    "img": "SelfDefBuff",
    "range": 6,
    "AP": 8,
    "description": "에너지 실드를 전개해 2라운드 동안 피해를 흡수하는 방어막을 부여하고, 상태 이상을 해제합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "UnderWatcherGenerator_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "재충전 개시",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, HP가 50% 이하면 자신에게 걸린 해로운 효과를 모두 제거하고 받는 피해가 감소하며 효과 저항이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherGenerator_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "제네레이터 쇼트",
    "img": "SelfSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 일정 확률로 쇼트가 생겨 2라운드 동안 행동 불능이 됩니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherGenerator_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "제네레이터 파괴",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "description": "파괴될 경우, 모든 파츠의 강화 효과가 해제되고 행동 불가 상태가 됩니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "UnderWatcherArm_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "플라즈마 커터",
    "img": "MeleeAttack",
    "range": 8,
    "AP": 3,
    "description": "플라즈마 커터로 $(1) 피해를 줍니다. 대상이 표식 상태면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherArm_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "대공 펄스 빔 포",
    "img": "WideBeamShot",
    "range": 8,
    "AP": 6,
    "description": "목표 열에 $(1) 피해를 줍니다. 대상이 기동형이면 피해량이 증가합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "UnderWatcherArm_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "재 조준",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 적중 강화 상태면 적중이 추가로 증가합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherArm_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "최대 출력",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "에너지 충전 중첩이 5 이상이면, 적중이 증가하며 반격합니다.",
    "areadata": [
      5
    ]
  },
  "HarvesterEX_TU4_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "초합금 플레이팅",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "견고한 장갑으로 인해, 일정 위력 이하의 공격은 통하지 않습니다.",
    "areadata": [
      5
    ]
  },
  "NightChick_RV_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "S.C. 머신건",
    "img": "MGShot",
    "range": 5,
    "AP": 3,
    "description": "머신건 사격으로 $(1) 피해를 줍니다. 대상이 회피 감소 상태면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChick_RV_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "근접 난사",
    "img": "MGShot",
    "range": 1,
    "AP": 3,
    "description": "머신건 근접 사격으로 $(1.5) 피해를 줍니다. 대상이 방어 감소 상태면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChick_RV_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "기동 준비",
    "img": "SelfSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "적을 공격하기 전까지 행동력이 감소하며 받는 피해가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChick_RV_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "전투 적응 회로",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 공격력 / 방어력 / 명중 / 회피가 증가합니다. 해당 효과는 중첩됩니다.",
    "areadata": [
      5
    ]
  },
  "NightChick_RV_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "칙 기회 포착",
    "img": "DefCounter",
    "range": 0,
    "AP": 0,
    "description": "회피 성공 시, 적의 빈틈을 노려 반격 합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherSensor_TU2_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "록 온 센서",
    "img": "Scan",
    "range": 8,
    "AP": 5,
    "description": "목표 대상을 조준해 표식으로 설정한 후, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다. AP를 감소시키며, 일정 확률로 강화 효과를 해제합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherSensor_TU2_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "다중 록 온 시스템",
    "img": "Scan",
    "range": 8,
    "AP": 6,
    "description": "목표 대상들을 조준해 표식으로 설정한 후, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다. 강화 효과를 해제하며, AP를 감소시킵니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "UnderWatcherSensor_TU2_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "조준 보정 시스템",
    "img": "Scan",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 자신의 현재 HP 비율에 따라 주변 장치에게 적중 증가 효과를 줍니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "UnderWatcherSensor_TU2_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "최대 출력",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "에너지 충전 중첩이 3 이상이면, 방해 효과를 걸 확률과 회피가 대폭 증가합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherSensor_TU2_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "반응 강화 모드",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "HP가 50% 이하가 되면 매 라운드 회피가 증가합니다. 최대 3회까지 중첩됩니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcher_TU2_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "확산 플라즈마 입자포",
    "img": "WideBeamShot",
    "range": 5,
    "AP": 3,
    "description": "지정 범위에 보호 효과를 무시하고 $(0.5) 피해를 주는 확산 입자포를 발사합니다. 대상이 표식 상태면 피해량이 증가하며, 대상의 방어력을 감소시킵니다.",
    "areadata": [
      7,
      8,
      4,
      5,
      6,
      1,
      2
    ]
  },
  "UnderWatcher_TU2_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "메가 플라즈마 캐논",
    "img": "BeamShot",
    "range": 8,
    "AP": 10,
    "description": "지정 행에 $(2) 피해를 주는 플라즈마 입자포를 발사합니다. 보호 효과를 무시하며, 표식 상태인 대상에게 피해량이 크게 증가합니다.",
    "areadata": [
      4,
      5,
      6
    ]
  },
  "UnderWatcher_TU2_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "특수 합금 발사구",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 받을 때, 에너지 충전 상태면 높은 확률로 최소 피해만 받습니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcher_TU2_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "최대 출력",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "에너지 충전 중첩이 4 이상이면, 공격할 때 방어막과 피해 감소 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcher_TU2_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "시스템 정지",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "description": "사망할 경우, 관련된 모든 시스템이 정지합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "UnderWatcherGenerator_TU2_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "에너지 충전",
    "img": "SelfAtkBuff",
    "range": 8,
    "AP": 7,
    "description": "각 장치들에게 에너지를 전달해, 공격력과 효과 저항을 증가시키며 받는 피해를 1회 무효화합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      1,
      2,
      3
    ]
  },
  "UnderWatcherGenerator_TU2_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "에너지 실드",
    "img": "SelfDefBuff",
    "range": 8,
    "AP": 4,
    "description": "에너지 실드를 전개해 피해를 흡수하는 방어막을 부여하고, 상태 이상을 해제합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "UnderWatcherGenerator_TU2_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "에너지 코팅",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "스킬 사용 시, 받는 공격을 3회 무효화합니다. 3라운드 동안 받는 피해가 감소하며, 효과 저항이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherGenerator_TU2_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "제네레이터 쇼트",
    "img": "SelfSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 높은 확률로 AP가 감소하며 낮은 확률로 쇼트가 생겨 행동 불능이 됩니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherGenerator_TU2_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "제네레이터 파괴",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "description": "파괴될 경우, 모든 파츠의 강화 효과가 해제되고 행동 불가 상태가 됩니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "UnderWatcherArm_TU2_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "플라즈마 커터",
    "img": "MeleeAttack",
    "range": 8,
    "AP": 3,
    "description": "플라즈마 커터로 $(1) 피해를 줍니다. 대상이 표식 상태면 피해량이 증가하며, 대상의 방어력을 감소시킵니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherArm_TU2_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "대공 펄스 빔 포",
    "img": "WideBeamShot",
    "range": 8,
    "AP": 5,
    "description": "목표 열에 $(1) 피해를 줍니다. 대상이 기동형이면 피해량이 증가합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "UnderWatcherArm_TU2_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "재 조준",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 적중 강화 상태면 적중이 추가로 증가합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherArm_TU2_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "최대 출력",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "에너지 충전 중첩이 5 이상이면, 적중과 치명타가 증가하며 반격합니다.",
    "areadata": [
      5
    ]
  },
  "UnderWatcherArm_TU2_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "긴급 요격 모드",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "자신의 HP가 50% 이하인 경우, 라운드 개시 시 AP가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickQM_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "공격 방해",
    "img": "Shot",
    "range": 4,
    "AP": 5,
    "description": "대상에게 $(1.2) 피해를 주며, 2라운드 동안 대상의 공격력 / 적중 / 치명타를 낮춥니다.",
    "areadata": [
      5
    ]
  },
  "NightChickQM_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "출력 강화",
    "img": "TeamAtkBuff",
    "range": 3,
    "AP": 7,
    "description": "주변 아군의 출력을 강화해 공격력 / 적중 / 치명타를 높입니다. 자신은 행동력이 증가합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "NightChickQM_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "일제 공격 지원",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 일정 확률로 무장 보급을 받은 아군의 공격을 지원합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickQM_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "숙련된 칙 웅크리기",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "HP가 50% 이하가 되면 받는 피해가 감소하며 회피가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickQM_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "과전류 방출",
    "img": "TeamAtkDeBuff",
    "range": 0,
    "AP": 0,
    "description": "사망 시, 모든 아군의 행동력 / 공격력이 감소합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      1,
      2,
      3
    ]
  },
  "LegionSP_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "점착탄 난사",
    "img": "TeamSpdDeBuff",
    "range": 4,
    "AP": 5,
    "description": "점착탄을 난사해 $(0.01) 피해를 주고, 대상들의 회피를 낮추며 회피 강화 효과를 해제합니다. 적중 대상은 이동 불가 상태가 되며, 자신은 적중과 치명타가 증가합니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "LegionSP_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "대장갑 정밀 저격",
    "img": "Snipe",
    "range": 5,
    "AP": 7,
    "description": "대장갑 정밀 저격으로 $(1.5) 방어 관통 피해를 줍니다. 대상이 중장형인 경우, 피해량이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "LegionSP_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "위장 홀로그램 발산",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "위장 홀로그램을 발산해, 적 진영과 멀수록 회피가 증가합니다. 해당 효과는 공격 시, 해당 라운드에는 일시적으로 해제됩니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobTS_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "집중 견제",
    "img": "ARShot",
    "range": 4,
    "AP": 5,
    "description": "집중 견제 사격으로 $(1.1000000000000001) 피해를 주고, 대상의 공격력 / 적중 / 회피를 낮추며 받는 피해 증가 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobTS_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "냉각기 조준",
    "img": "ARShot",
    "range": 3,
    "AP": 7,
    "description": "조준 사격으로 $(1.5) 피해를 줍니다. 대상이 로봇인 경우, 냉각 장치를 파괴해 화염 저항과 행동력을 낮춥니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobTS_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "상황 전파",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "아군 사망 시, 주변에 있는 아군에게 상황을 전파해 AP와 공격력을 상승시킵니다.",
    "areadata": [
      8,
      4,
      6,
      2
    ]
  },
  "ProgramMobTN_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "표적 제거",
    "img": "Snipe",
    "range": 4,
    "AP": 6,
    "description": "저격으로 $(1.2) 피해를 줍니다. 대상이 표식 상태면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobTN_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "쇼크탄 사격",
    "img": "Shock",
    "range": 4,
    "AP": 7,
    "attr": "electric",
    "description": "쇼크탄 저격으로 $(1) 전기 속성 피해를 줍니다. 대상이 냉기 저항 감소 상태면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobTN_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "전열 지원 사격",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 자신과 같은 행 앞에 배치된 아군의 AP를 증가시키며 일정 확률로 대상의 공격을 지원합니다.",
    "areadata": [
      4,
      5,
      6
    ]
  },
  "ProgramMobTN_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "대응 사격",
    "img": "DefCounter",
    "range": 0,
    "AP": 0,
    "description": "아군 사망 시, 해당 라운드 동안에는 반격합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobMT_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "냉각탄 사격",
    "img": "IceShot",
    "range": 3,
    "AP": 5,
    "attr": "ice",
    "description": "냉각탄 사격으로 $(0.7) 냉기 속성 피해를 주고, 대상의 냉기 저항을 낮춥니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobMT_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "대 레이더 체프",
    "img": "MultiMissile",
    "range": 2,
    "AP": 7,
    "description": "지정 범위에 챼프를 살포해 2라운드 동안 범위 내 아군의 회피 / 행동력을 증가시키며 받는 피해를 감소시킵니다.",
    "areadata": [
      8,
      9,
      5,
      6
    ]
  },
  "ProgramMobMT_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "호위 대형",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시, 3라운드 동안 인접한 아군을 보호하며 적중을 증가시킵니다.",
    "areadata": [
      8,
      4,
      6,
      2
    ]
  },
  "ProgramMobTT_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "제압 사격",
    "img": "MultiMissile",
    "range": 3,
    "AP": 5,
    "description": "제압 사격으로 $(1.2) 피해를 주고 표식으로 설정해 받는 피해를 증가시킵니다. 대상의 AP와 행동력을 감소시킵니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobTT_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "밀착 호위",
    "img": "Scan",
    "range": 6,
    "AP": 5,
    "description": "3라운드 동안 대상 아군을 보호하며 대상의 AP를 증가시킵니다. 자신은 받는 피해가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobTT_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "경계 강화",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 자신의 HP가 50% 이하면 행동력이 증가하며 반격합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobMN_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "작열 미사일",
    "img": "Missile",
    "range": 3,
    "AP": 6,
    "description": "미사일로 $(1.1000000000000001) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 대상이 화염 저항 감소 상태면 일정 확률로 점화 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobMN_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "소이탄 폭격",
    "img": "AirStrike",
    "range": 2,
    "AP": 9,
    "attr": "fire",
    "description": "목표 범위에 $(1) 화염 속성 피해를 줍니다. 대상이 표식 상태면 피해량이 증가합니다.",
    "areadata": [
      4,
      5,
      6
    ]
  },
  "ProgramMobMN_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "정밀 레이더",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 적중 / 회피가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobMN_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "지상 감지 시스템",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 일정 확률로 경장 / 중장형 적에게 주는 피해가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobMS_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "지향 사격",
    "img": "MultiMissile",
    "range": 3,
    "AP": 8,
    "description": "기총 난사로 $(1) 피해를 주고, 대상들을 표식으로 설정해 받는 피해를 증가시킵니다. 대상의 행동력과 회피를 감소시키며, 일정 확률로 피해 감소 효과를 해제합니다.",
    "areadata": [
      4,
      5,
      6
    ]
  },
  "ProgramMobMS_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "다연장 재밍 미사일",
    "img": "Scan",
    "range": 3,
    "AP": 7,
    "description": "재밍 미사일로 $(0.9) 피해를 주고, 대상의 공격력 / 적중 / 치명타를 낮춥니다. 일정 확률로 대상에게 적용된 공격력 강화 효과를 해제합니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "ProgramMobMS_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "긴급 경보",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 주변에 HP가 33% 이하인 아군이 있으면 대상의 AP와 회피를 증가시킵니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "ProgramMobMS_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "공격 분석",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 공격을 분석해 해당 라운드 동안 회피가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobMS_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "경보 오작동",
    "img": "TeamAtkDeBuff",
    "range": 0,
    "AP": 0,
    "description": "사망 시, 레이더 망에 오류가 발생해 모든 아군의 적중 / 회피가 감소합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "Tortoise_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "프래그 샷건",
    "img": "ShotGun",
    "range": 3,
    "AP": 6,
    "description": "샷건을 발사해 $(1.2) 피해를 줍니다. 자신이 전열이면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Tortoise_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "장갑 장착",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 8,
    "description": "외장형 반응 장갑을 장착해 전투 속행 효과를 얻으며, 방어력과 모든 속성 저항이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Tortoise_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "외장형 반응 장갑",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 받는 경우, 3회까진 최소 피해만 받으며 효과 저항이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Tortoise_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "엄폐 지원",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 같은 행의 뒤에 배치된 아군을 보호합니다. 해당 효과는 자신이 스킬을 사용하면 해제됩니다.",
    "areadata": [
      4,
      5,
      6
    ]
  },
  "ProgramMobAS_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "스턴 스파이크",
    "img": "MultiMissile",
    "range": 3,
    "AP": 6,
    "attr": "electric",
    "description": "대상에게 $(0.9) 전기 속성 피해를 줍니다. 대상이 냉기 저항 감소 상태면 감전시켜 지속 전기 피해를 줍니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobAS_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "파일 벙커 드라이브",
    "img": "Scan",
    "range": 2,
    "AP": 9,
    "description": "파일 벙커로 대상에게 $(1.8) 피해를 주며, 대상을 뒤로 밉니다. 대상에게 적용 중인 모든 보호효과를 해제하며, 표식 상태면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobAS_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "노즐 강화",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "경장형에게 주는 피해가 증가하며, 피해 감소 효과와 방어막을 무시합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobAS_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "전열 돌파",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 일정 확률로 같은 열에 인접한 아군의 공격을 지원합니다.",
    "areadata": [
      8,
      2
    ]
  },
  "ProgramMobAN_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "122mm APFSDS",
    "img": "CannonShot",
    "range": 5,
    "AP": 10,
    "description": "포격으로 $(1.8) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 공격기인 경우 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobAN_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "확산형 고폭탄",
    "img": "CannonShotWide",
    "range": 4,
    "AP": 9,
    "attr": "fire",
    "description": "확산 포격으로 무시하고 $(1) 화염 속성 피해를 줍니다. 대상이 표식 상태면 피해 감소 효과를 해제합니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "ProgramMobAN_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "연계 포격",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "적 처치 시, AP가 증가하며 다음 공격까지 공격력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobAN_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "핀 포인트 포격",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 전열에 있으면 적의 방어막과 피해 감소 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobAN_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "집중 포격 대열",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 같은 열에 인접한 아군의 공격력 / 치명타를 상승시킵니다.",
    "areadata": [
      8,
      2
    ]
  },
  "ProgramMobAT_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "2연장 속사포",
    "img": "MGShot",
    "range": 3,
    "AP": 6,
    "description": "기관포로 $(1.2) 피해를 주고, 대상이 표식 상태인 경우 일정 확률로 행동 불가 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobAT_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "충격탄 발사",
    "img": "CannonShot",
    "range": 4,
    "AP": 9,
    "description": "충격탄을 발사해 $(1.8) 피해를 주고, 대상의 행동력을 감소시킵니다. 일정 확률로 대상에게 걸려있는 강화 효과를 해제합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobAT_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "내성 처리",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 모든 속성 저항과 상태 이상 저항이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobAT_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "특수 반응 장갑",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "HP가 50% 이하인 경우, 피격 시 일정 확률로 방어력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "ProgramMobAT_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "공격 대열 보호",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "같은 열의 아군을 보호하며, 자신과 같은 행의 뒤에 배치된 아군이 받는 피해를 감소시킵니다.",
    "areadata": [
      4,
      5,
      6
    ]
  },
  "Spector_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "전자기장 미사일",
    "img": "MultiMissile",
    "range": 4,
    "AP": 6,
    "description": "전자기장 미사일로 $(1.1000000000000001) 피해를 주고, 대상의 적중 / 치명타 / 효과 발동을 낮춥니다.",
    "areadata": [
      8,
      9,
      5,
      6
    ]
  },
  "Spector_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "반물질 역장 전개",
    "img": "TeamDefBuff",
    "range": 6,
    "AP": 7,
    "description": "반물질 역장을 넓게 전개해 주변 아군이 받는 피해를 일정 횟수 무효화합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "Spector_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "반물질 역장",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 반물질 역장을 전개해 자신이 받는 피해를 일정 횟수 무효화합니다.",
    "areadata": [
      5
    ]
  },
  "Spector_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "행동 예측",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "스킬 사용 시, 주변 아군에게 적 분석 결과를 발신해 적중 / 회피 / AP를 올려줍니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "Spector_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "은폐장",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시, 은폐장을 전개해 회피가 대폭 증가합니다. 해당 효과는 전투가 진행될수록 점감됩니다.",
    "areadata": [
      5
    ]
  },
  "ExpGoblinT_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "부식탄 사격",
    "img": "MGShot",
    "range": 3,
    "AP": 5,
    "description": "대상에게 $(1) 피해를 주고, 대상이 표식 상태인 경우 일정 확률로 부식 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "ExpGoblinT_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "기관총 난사",
    "img": "MGWideShot",
    "range": 3,
    "AP": 8,
    "description": "목표 범위에 $(1) 피해를 주고, 대상이 표식 상태인 경우 일정 확률로 강화 효과를 해제합니다.",
    "areadata": [
      0,
      0.5,
      0,
      0,
      1,
      0,
      0,
      0.5,
      0
    ]
  },
  "ExpGoblinT_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "격분",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, AP / 공격력 / 치명타가 증가하며 방어력이 감소합니다.",
    "areadata": [
      5
    ]
  },
  "ExpGoblinT_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "재생 기능",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 불능 시, 1회에 한해 HP를 회복하고 전투를 속행합니다.",
    "areadata": [
      5
    ]
  },
  "ExpGoblinA_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "목표 파쇄",
    "img": "MeleeAttack",
    "range": 3,
    "AP": 7,
    "description": "대상에게 $(1.5) 피해를 주고, 표식으로 설정해 받는 피해를 증가시킵니다. 대상의 적중과 치명타가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "ExpGoblinA_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "벙커 사출",
    "img": "WideSwordAttk",
    "range": 4,
    "AP": 8,
    "description": "목표 범위에 $(1) 피해를 주고, 대상의 회피율과 효과 저항을 낮춥니다.",
    "areadata": [
      0,
      0,
      0,
      0.75,
      1,
      0,
      0,
      0,
      0
    ]
  },
  "ExpGoblinA_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "전투 본능",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 자신에게 무작위 강화 효과가 적용됩니다.",
    "areadata": [
      5
    ]
  },
  "ExpGoblinA_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "공격 경계",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "사망 시, 인접한 아군의 받는 피해와 행동력을 감소키시고 효과 저항을 증가시킵니다.",
    "areadata": [
      8,
      4,
      6,
      2
    ]
  },
  "ExpGenerator2_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "출력 제한 해제",
    "img": "TeamAtkBuff",
    "range": 6,
    "AP": 6,
    "description": "범위 내 아군의 출력 제한을 해제해, 공격력을 크게 올리며 적중을 감소시킵니다. 모든 해로운 효과를 해제합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "ExpGenerator2_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "외피 강화 처리",
    "img": "TeamDefBuff",
    "range": 6,
    "AP": 9,
    "description": "범위 내 아군의 AP를 올려주며, 받는 피해를 감소시킵니다. 효과를 받는 대상들은 전투 속행 효과가 적용됩니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      1,
      2,
      3
    ]
  },
  "ExpGenerator2_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "고출력 방어막",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 일정 수치의 방어막을 얻습니다. HP가 50% 이하가 되면 방어막 수치가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "ExpGenerator2_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "방어막 출력 상승",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 방어막 출력을 올려 자신과 인접 아군이 받는 피해를 감소시킵니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "ExpGenerator2_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "에너지 역류",
    "img": "TeamDefDeBuff",
    "range": 0,
    "AP": 0,
    "description": "아군 사망 시, HP가 감소합니다. 파괴될 경우에는, 모든 아군을 행동 불능으로 만들며 강화 효과를 해제합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      1,
      2,
      3
    ]
  },
  "ExecutionerRB_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "장갑 해제",
    "img": "SwordAttk",
    "range": 4,
    "AP": 5,
    "description": "지정 대상에게 $(1) 피해를 주고, 대상의 장갑을 해제해 방어력을 낮추고 받는 피해를 증가시킵니다. 대상이 해당 효과를 다시 받는 경우, 행동 불가 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "ExecutionerRB_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "무장 해제",
    "img": "WideSwordAttk",
    "range": 5,
    "AP": 8,
    "description": "지정 범위에 $(0.75) 피해를 주고, 대상의 무장을 해제해 공격력과 치명타를 낮춥니다. 대상이 해당 효과를 다시 받는 경우, 행동 불가 상태로 만듭니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "ExecutionerRB_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "공격 차단",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, HP가 50% 이상이면 본체와 다른 파츠를 보호합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "ExecutionerRB_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "자동 방어 시스템",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "HP가 50% 이상이면 모든 피해를 최소화하며 효과 저항이 증가합니다. 활성화 된 상태에서 피격 시, 오버플로우 중첩이 쌓입니다. 중첩 4 이상 상태로 라운드 개시 시, 해당 상태가 해제되며 행동 불능이 됩니다.",
    "areadata": [
      5
    ]
  },
  "ExecutionerRB_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "다중 장갑 구조",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "HP가 일정 이하가 되면 방어력이 대폭 감소하며 받는 피해가 증가합니다. 해당 상태에선 회피와 행동력이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Executioner_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "처형 개시",
    "img": "SwordAttk",
    "range": 5,
    "AP": 4,
    "description": "지정 대상에게 $(1) 피해를 줍니다. 대상이 행동 불가 상태면 피해량이 크게 증가하며, 해제 불가 행동 불능 효과를 부여합니다.",
    "areadata": [
      5
    ]
  },
  "Executioner_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "학살",
    "img": "WideSwordAttk",
    "range": 4,
    "AP": 8,
    "description": "지정 범위에 $(1.25) 보호 무시 피해를 줍니다. 처형자 중첩이 5 이상이면 추가 화염 피해를 주며, 대상에게 걸려있는 강화 효과를 해제합니다. 처형자 중첩을 5 소모합니다.",
    "areadata": [
      7,
      9,
      5,
      1,
      3
    ]
  },
  "Executioner_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "처형자",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 공격력이 영구적으로 증가합니다. 자신이 <공격 연계> 효과를 받는 상태면 공격 대상의 방어막과 피해 감소 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "Executioner_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "왜곡장",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "모든 피해를 최소 피해만 받습니다. 처형자 중첩이 5 이상인 상태로 피격 시, 오버플로우로 인한 고정 물리 피해를 받으며 모든 강화 효과가 해제됩니다.",
    "areadata": [
      5
    ]
  },
  "Executioner_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "고속 복원",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "<공격 차단> 효과를 받는 상태인 경우, 행동 불능이 되면 일정 HP를 회복하고 전투를 속행합니다.",
    "areadata": [
      5
    ]
  },
  "ExecutionerLB_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "쪼개기",
    "img": "SwordAttk",
    "range": 5,
    "AP": 5,
    "description": "지정 대상에게 $(1) 피해를 줍니다. 대상이 방어력 감소 상태면 피해량이 증가하며 피해 감소 효과를 해제합니다.",
    "areadata": [
      5
    ]
  },
  "ExecutionerLB_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "꼬챙이 꿰기",
    "img": "WideSwordAttk",
    "range": 4,
    "AP": 8,
    "description": "지정 범위에 $(1.25) 보호 무시 피해를 줍니다. 대상이 공격기 또는 지원기면 피해량이 증가합니다.",
    "areadata": [
      4,
      5,
      6
    ]
  },
  "ExecutionerLB_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "공격 연계",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 자신이 공격력 증가 상태면 본체와 다른 파츠의 공격을 지원합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "ExecutionerLB_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "확인 사살",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 공격력 / 치명타가 증가합니다. 공격력 증가가 3중첩 이상인 경우, 피해 감소 효과를 무시하며 방어 관통 효과를 얻습니다. 피격 시 해제됩니다.",
    "areadata": [
      5
    ]
  },
  "ExecutionerLB_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "경계 모드 전환",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 다음 공격을 받기 전까지 회피가 크게 증가하며 적중이 감소합니다.",
    "areadata": [
      5
    ]
  },
  "BigChickSP_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "돌격 난사",
    "img": "Shot",
    "range": 3,
    "AP": 6,
    "description": "기관포를 발사해 목표 적에게 $(0.5) 피해를 줍니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "BigChickSP_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "기관포 난사",
    "img": "Shot",
    "range": 1,
    "AP": 8,
    "description": "기관포를 난사해 목표 적들에게 $(1) 피해를 줍니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "BigChickSP_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "과출력 상태",
    "img": "Shock",
    "range": 0,
    "AP": 0,
    "description": "자신의 HP가 50% 이상인 경우, 과출력 상태가 되어 공격력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickQMEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "공격 훼방",
    "img": "Shot",
    "range": 4,
    "AP": 5,
    "description": "대상에게 $(1.2) 피해를 주며, 2라운드 동안 대상의 공격력 / 적중 / 치명타를 낮춥니다. 해당 효과는 2회까지 중첩됩니다.",
    "areadata": [
      5
    ]
  },
  "NightChickQMEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "전무장 보급",
    "img": "TeamAtkBuff",
    "range": 3,
    "AP": 7,
    "description": "주변 아군의 출력을 강화해 공격력 / 적중 / 치명타를 높입니다. 자신은 행동력이 증가합니다.  해당 효과는 2회까지 중첩됩니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "NightChickQMEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "칙 약진하기",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 일정 확률로 무장 보급을 받은 아군의 공격을 지원하며, 피격 시 회피율이 증가합니다. 회피율 증가 효과는 최대 2회 중첩됩니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickQMEX_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "전황 판단",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 배치된 열에 따라 아군 또는 자신에게 추가 효과가 부여됩니다. 전열에 배치된 경우 아군 전체의 방어력 / 모든 저항을 올려주고, 중열에 배치된 경우 자신의 행동력 / 방어력 / 피해 감소가 증가하며, 후열에 배치된 경우 아군 전체의 공격력 / 적중을 올려줍합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickQMEX_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "배수진",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "사망 시, 모든 아군의 행동력이 감소하고, 받는 피해 / 공격력 / 적중이 증가합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "SpectorBS_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "전자기장 미사일 난사",
    "img": "MultiMissile",
    "range": 4,
    "AP": 6,
    "description": "전자기장 미사일을 난사해 $(1.2) 피해를 주고, 대상의 치명타 / 효과 발동/ 사거리를 낮춥니다. 해당 효과는 2회까지 중첩됩니다.",
    "areadata": [
      8,
      9,
      5,
      6
    ]
  },
  "SpectorBS_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "강화 역장 전개",
    "img": "TeamDefBuff",
    "range": 6,
    "AP": 7,
    "description": "반물질 역장을 넓게 전개해 주변 아군이 받는 피해를 일정 횟수 무효화하고, 자신과 주변 아군의 효과 저항을 올려줍니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "SpectorBS_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "강화 반물질 역장",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 반물질 역장을 전개해 자신이 받는 피해를 일정 횟수 무효화하고, 받는 피해를 낮춥니다.",
    "areadata": [
      5
    ]
  },
  "SpectorBS_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "전황 예측",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "스킬 사용 시, 주변 아군에게 적 분석 결과를 발신해 적중 / 회피 / AP를 올려줍니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "SpectorBS_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "강화 은폐장",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시, 은폐장을 전개해 회피가 대폭 증가합니다. 해당 효과는 전투가 진행될수록 점감됩니다.",
    "areadata": [
      5
    ]
  },
  "LegionSPEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "점착탄 연사",
    "img": "TeamSpdDeBuff",
    "range": 4,
    "AP": 5,
    "description": "점착탄을 연사해 $(0.01) 피해를 주고, 대상들의 회피를 낮추며 회피 강화 효과를 해제합니다. 적중 대상은 행동력이 감소하며, 자신은 적중과 사거리가 증가합니다. 해당 효과는 2회까지 중첩됩니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "LegionSPEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "정밀 선도 사격",
    "img": "Snipe",
    "range": 5,
    "AP": 7,
    "description": "정밀 선도 사격으로 $(1.5) 방어 관통 피해를 줍니다. 대상이 기동형인 경우, 피해량이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "LegionSPEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "위장 홀로그램 투영",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "위장 홀로그램을 투영해, 적 진영과 멀수록 회피가 증가합니다. 해당 효과는 공격 시, 해당 라운드에는 일시적으로 해제됩니다.",
    "areadata": [
      5
    ]
  },
  "LegionSPEX_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "저격 대응",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 재빠르게 대응해 행동력이 증가하며 반격합니다. 행동력 증가 효과는 3회까지 중첩됩니다.",
    "areadata": [
      5
    ]
  },
  "CenturionCF_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "정밀 유도 미사일",
    "img": "MultiMissile",
    "range": 4,
    "AP": 7,
    "description": "정밀 유도 미사일로 $(1) 피해를 줍니다. 대상이 표식 상태면 피해량이 크게 증가합니다.",
    "areadata": [
      8,
      9,
      5,
      6
    ]
  },
  "CenturionCF_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "멀티 록 온",
    "img": "Scan",
    "range": 4,
    "AP": 6,
    "description": "목표 범위 대상들을 표식으로 설정하고, 회피 강화 효과를 해제하며 회피가 낮춥니다. 자신은 적중이 증가하며, 대상들은 받는 피해 증가 상태가 됩니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "CenturionCF_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "대열 정비",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "아군 사망 시, 대열을 정비해 인접한 아군들과 자신의 행동력 / 적중 / 회피가 증가합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "CenturionCF_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "위기 극복",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 받을 때, 자신에게 능력치 감소 효과가 적용되어 있으면 반격하며, 일정 확률로 해당 효과를 해제합니다..",
    "areadata": [
      5
    ]
  },
  "EmperorChick_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "칙 머신캐논",
    "img": "MGShot",
    "range": 4,
    "AP": 5,
    "description": "대구경 기관포로 $(1.8) 피해를 주고, 대상에게 무작위 방해 효과를 부여합니다.",
    "areadata": [
      5
    ]
  },
  "EmperorChick_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "칙 파이널 어택",
    "img": "WideBeamShot",
    "range": 3,
    "AP": 10,
    "description": "전 무장을 발사해 목표 범위에 $(2) 피해를 줍니다. 목표 중심점 밖일수록 피해가 감소하며, <광분> 상태면 피해량이 크게 증가합니다.",
    "areadata": [
      0.5,
      0.75,
      0.5,
      0.75,
      1,
      0.75,
      0.5,
      0.75,
      0.5
    ]
  },
  "EmperorChick_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "전투 프로그램 설정",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 자신의 HP가 50% 이하면 전투 프로그램을 갱신해 자신과 주변 아군에게 무작위 강화 효과를 부여합니다. 낮은 확률로 치명적 오류가 발생해 행동 불가가 되거나 받는 피해 증가 효과가 발생합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "EmperorChick_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "칙 철벽 방어술",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "공격한 후, 방어 태세를 취해 해당 라운드 동안에는 최소 피해만 받습니다.",
    "areadata": [
      5
    ]
  },
  "EmperorChick_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "앵그리 칙",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "아군이 처치되면 3라운드 동안 공격력이 증가합니다. 라운드 개시 시, <앵그리 칙>이 3 중첩 이상이면 <광분> 상태가 되어 공격력 / 적중 / 치명타 / 행동력이 증가하며 피해 감소 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickC_EV5_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "연료 탱크 유폭",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "attr": "fire",
    "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주고 피해 감소 효과를 해제합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "ScoutSP_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "충격탄 투하",
    "img": "Missile",
    "range": 2,
    "AP": 6,
    "description": "충격 미사일을 투하해 $(1.2) 피해를 주고 대상의 AP를 감소시킵니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "ScoutSP_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "경보 발령",
    "img": "Scan",
    "range": 6,
    "AP": 6,
    "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP / 사거리 / 치명타를 증가시킵니다.",
    "areadata": [
      5
    ]
  },
  "ScoutSP_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "기습 편제",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "이동 시, 인접한 아군의 공격을 지원합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "ScoutSP_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "지원 대열",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 자신의 HP가 50% 이상인 경우 인접 아군의 공격력 / 방어력 / 효과 저항이 증가합니다. HP가 25% 미만인 경우, 인접 아군의 공격력 / 방어력/ 행동력이 감소합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "SpectorMS_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "교란용 전자기장 미사일",
    "img": "MultiMissile",
    "range": 4,
    "AP": 6,
    "description": "전자기장 미사일로 대상들을 교란해 $(1.2) 피해를 주고, 대상의 효과 저항 / 사거리를 낮춥니다. 해당 효과는 2회까지 중첩됩니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "SpectorMS_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "모드 변경",
    "img": "TeamDefBuff",
    "range": 6,
    "AP": 7,
    "description": "전투 모드로 전환해 공격력 / 치명타가 증가하지만 받는 피해도 증가하며, 행동력이 감소합니다.",
    "areadata": [
      5
    ]
  },
  "SpectorMS_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "이동형 반물질 역장",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 반물질 역장을 전개해 자신과 인접 아군이 받는 피해를 일정 횟수 무효화합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "SpectorMS_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "전투 패턴 분석",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 주변 아군에게 전투 패턴 분석 결과를 발신해 적중 / 치명타 / 효과 저항을 올려줍니다. 해당 효과는 3회까지 중첩됩니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "SpectorMS_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "은폐장 전개",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시, 은폐장을 전개해 회피가 대폭 증가합니다. 해당 효과는 전투가 진행될수록 점감됩니다.",
    "areadata": [
      5
    ]
  },
  "NightChickAQ_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "액체 분사",
    "img": "BeamShot",
    "range": 4,
    "AP": 7,
    "attr": "ice",
    "description": "지정 범위에 $(1) 냉기 속성 피해를 줍니다. 적중 대상은 침수 상태가 됩니다.",
    "areadata": [
      4,
      5,
      6
    ]
  },
  "NightChickAQ_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "재 정비 프로토콜",
    "img": "TeamDefBuff",
    "range": 6,
    "AP": 5,
    "description": "지정 범위의 아군을 재 정비해, 해로운 효과를 해제하며 AP / 적중 / 효과 저항을 올려줍니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "NightChickAQ_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "방수 장갑",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "냉기 / 효과 저항이 증가하며, 받는 피해가 감소합니다. 침수 상태인 경우, 제어를 상실해 회피 / 행동력이 크게 증가하지만 적중이 크게 감소합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickAQ_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "누수",
    "img": "TeamSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "처치될 경우, 범위 내에 있는 대상들을 침수 상태로 만들며 행동력과 AP를 감소시킵니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickTD_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "스턴 샷",
    "img": "Shock",
    "range": 4,
    "AP": 4,
    "attr": "electric",
    "description": "지정 대상에게 $(1) 전기 속성 피해를 줍니다. 적중 대상은 높은 확률로 AP / 회피 / 전기 저항이 감소합니다. 대상이 침수 상태면 피해량이 크게 증가하며, 일정 확률로 행동 불가 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "NightChickTD_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "일렉트릭 쇼크",
    "img": "WideLightning",
    "range": 1,
    "AP": 8,
    "attr": "electric",
    "description": "지정 범위에 $(1) 보호 무시 전기 속성 피해를 줍니다. 적중 대상은 높은 확률로 AP / 회피가 감소합니다. 대상이 침수 상태면 피해량이 크게 증가하며, 받는 피해 감소 상태를 해제합니다.",
    "areadata": [
      4,
      5,
      6
    ]
  },
  "NightChickTD_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "과충전",
    "img": "Shock",
    "range": 0,
    "AP": 0,
    "description": "전기 속성 공격을 맞을 경우, 과충전 상태가 되어 공격력 / 적중 / 회피 / AP / 행동력이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickTD_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "방전",
    "img": "Shock",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 자신이 침수 상태인 경우 방전으로 인한 고정 피해를 입습니다. 침수 상태로 처치될 경우, 범위 내 대상들에게 전기 피해를 줍니다. 해당 효과가 적용되는 대상이 침수 상태인 경우, 행동 불가가 됩니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "NightChickDEG_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "지면 교란 파장",
    "img": "TeamDefDeBuff",
    "range": 5,
    "AP": 9,
    "description": "교란 파장을 발산해 $(0.1) 보호 무시 피해를 주고, 3라운드 동안 표식 / 받는 피해 증가 / 적중 / 회피 감소 효과를 줍니다. 스킬 사용 시, 회피가 증가합니다. 해당 스킬은 반드시 적중하지만, 기동형 적에게는 부가 효과가 적용되지 않습니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "NightChickDEG_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "개량형 섬광탄",
    "img": "Beam",
    "range": 4,
    "AP": 8,
    "description": "지정 범위에 섬광탄을 발사해 $(0.1) 피해를 주고, 대상의 AP를 감소시키며 적중 / 치명타 증가 효과를 해제합니다. 적중한 대상은 2라운드 동안 적중과 치명타가 감소합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "NightChickDEG_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "정밀 지상 레이더",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "인접 아군들에게 보호막 / 피해 감소 무시 효과와 대 경장 / 중장형 피해 증가 효과를 부여합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickDEG_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "정보 발신 오류",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "자신이 침수 상태로 라운드 개시 시, 오류가 발생해 아군의 적중 / 치명타 / 행동력이 감소합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "BigChickS_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "방패 연타",
    "img": "ShieldWall",
    "range": 3,
    "AP": 5,
    "description": "방패 연타로 대상에게 $(1.3) 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가하며, 높은 확률로 행동 불가 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "BigChickS_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "칙 블로킹",
    "img": "ShieldWall",
    "range": 6,
    "AP": 6,
    "description": "방어 태세를 취해, 3라운드 동안 행 보호 / 열 보호 / 받는 피해 감소 / 효과 저항 증가 효과가 발생합니다. 자신의 HP가 25% 이하인 경우, 반격 효과가 추가됩니다.",
    "areadata": [
      5
    ]
  },
  "BigChickS_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "칙 방어 지휘",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "<칙 블로킹> 상태로 라운드 개시 시, 주변 아군에게 방어력 증가 / 받는 피해 감소 효과를 줍니다.",
    "areadata": [
      8,
      9,
      6,
      2,
      3
    ]
  },
  "BigChickS_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "칙 근성 발동",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 2라운드 동안 방어력 / 행동력이 증가합니다. 라운드 개시 시, <칙 근성 발동> 방어 증가 효과가 5회 이상이면 전투 속행 효과가 추가됩니다. 전투 속행 발동 시, 2라운드 동안 최소 피해만 받지만 지속 고정 피해를 입으며 방어막과 피해 감소 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "FallenC_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "개조 머신건",
    "img": "MGShot",
    "range": 4,
    "AP": 4,
    "description": "머신건 사격으로 $(1.1000000000000001) 피해를 줍니다. 대상이 경장형이거나 회피 / 방어력 감소 상태면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "FallenC_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "진동 분쇄탄",
    "img": "SelfDefDeBuff",
    "range": 4,
    "AP": 6,
    "description": "진동 분쇄탄으로 지정 범위에 $(1) 피해를 주고, 방어력 증가와 받는 피해 감소 효과를 해제합니다. 대상이 방어력 감소 상태면 피해량이 크게 증가합니다.",
    "areadata": [
      4,
      5
    ]
  },
  "FallenC_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "출력 한계 해제",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "적을 공격할 때마다 공격력과 행동력이 증가하지만 적중이 감소하며, 지속 물리 피해를 입습니다.",
    "areadata": [
      5
    ]
  },
  "FallenC_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "과출력 유폭",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "<출력 증폭>이 3중첩 이상인 상태에서 사망 시, 주변에 고정 피해를 주며 강화 효과를 해제합니다.",
    "areadata": [
      8,
      4,
      6,
      2
    ]
  },
  "PuppHeadC_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "고전압 스턴건",
    "img": "Shock",
    "range": 3,
    "AP": 5,
    "attr": "electric",
    "description": "대상에게 $(1) 전기 속성 피해를 주고, AP / 회피 / 행동력을 낮춥니다. 대상이 경장 / 중장형인 경우, 일정 확률로 행동 불가로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "PuppHeadC_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "칩입자 포획",
    "img": "Hang",
    "range": 4,
    "AP": 4,
    "description": "적중 대상을 앞으로 당겨 이동 불가 상태로 만들며, 높은 확률로 대상에게 걸린 강화 효과를 해제합니다. 스킬 사용 시, 3라운드 동안 행동력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "PuppHeadC_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "연산 병렬처리",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "인접 아군들의 연산을 보조해, 전투 개시 시 대상들의 AP / 치명타 / 행동력 / 효과 저항을 높입니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "PuppHeadC_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "네트워크 오류",
    "img": "TeamAtkDeBuff",
    "range": 0,
    "AP": 0,
    "description": "사망 시, 2라운드 동안 인접한 아군들의 적중과 사거리가 크게 감소합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "RampartC_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "개조 기총 견제",
    "img": "ARShot",
    "range": 4,
    "AP": 4,
    "description": "견제 사격으로 대상에게 $(1.1000000000000001) 피해를 주고, 2라운드 동안 공격력 / 치명타 / 적중 / 행동력을 낮춥니다.",
    "areadata": [
      5
    ]
  },
  "RampartC_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "요격 태세",
    "img": "DefCounter",
    "range": 6,
    "AP": 6,
    "description": "3라운드 동안 방어력이 증가하며 받는 피해가 감소합니다. 열 보호가 활성화되며, 해당 상태에서 공격받으면 반격합니다.",
    "areadata": [
      5
    ]
  },
  "RampartC_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "전열 방어 대형",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "자신이 전열에 있는 상태로 라운드 개시 시, 범위 내 아군을 지정 대상 보호하며 대상의 AP를 증가시킵니다.",
    "areadata": [
      8,
      6,
      2
    ]
  },
  "RampartC_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "긴급 지원 요청",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시 자신의 HP가 25% 이하인 경우, 아군 공격기에게 지원을 요청해 대상의 AP / 공격력 / 행동력을 증가시킵니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "DroneM_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "폭뢰 발사",
    "img": "Missile",
    "range": 3,
    "AP": 5,
    "attr": "fire",
    "description": "폭뢰를 발사해 $(1) 화염 속성 피해를 줍니다. 치명타 시, 추가 화염 피해를 주며 대상이 경장형 / 중장형인 경우 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "DroneM_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "지상 분석 레이더",
    "img": "Scan",
    "range": 5,
    "AP": 9,
    "description": "경장형 / 중장형 적을 분석해 3라운드 동안 대상의 공격력 / 방어력 / 치명타 / 적중 / 회피를 낮춥니다. 스킬 사용 시, 3라운드 동안 행동력이 증가합니다. 기동형 적에게는 효과가 없습니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "DroneM_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "방어 대열 지원",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "자신이 지정 대상 보호를 받고 있는 상태에서 아군 사망 시, 아군 보호기의 공격을 지원하며 대상의 AP를 상승시킵니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "DroneM_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "핀 포인트 폭격",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "자신이 전열일 경우, 방어막 / 피해 감소 효과를 무시하며 방어 관통이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "AMG11AA_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "회피 견제 사격",
    "img": "ARShot",
    "range": 5,
    "AP": 4,
    "description": "기총 사격으로 $(1.1000000000000001) 피해를 주고, 대상을 표식으로 설정해 회피를 낮추고 받는 피해를 증가시킵니다. 회피 감소 효과는 기동형에게 2배로 적용됩니다.",
    "areadata": [
      5
    ]
  },
  "AMG11AA_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "대공 기총 난사",
    "img": "WideBeamShot",
    "range": 3,
    "AP": 7,
    "description": "기총을 난사해 $(1) 피해를 주고, 대상들의 회피를 낮춥니다. 대상이 기동형인 경우 피해량이 증가하고, 회피 감소 효과가 2배로 적용되며 회피 증가 효과를 해제합니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "AMG11AA_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "대공 레이더 시스템",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 인접 아군의 적중 / 치명타 / 대 기동형 피해량을 증가시킵니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "AMG11AA_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "목표 설정 오류",
    "img": "TeamAtkDeBuff",
    "range": 0,
    "AP": 0,
    "description": "사망 시, 2라운드 동안 인접 아군의 행동력이 감소하며 해당 라운드 동안에는 스킬을 사용할 수 없게 됩니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "StingerC_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "냉동 가스 분사",
    "img": "Beam",
    "range": 3,
    "AP": 6,
    "attr": "ice",
    "description": "대상에게 냉동 가스를 분사해 $(1.2) 냉기 속성 피해를 주고, 일정 확률로 3라운드 동안 냉기 / 전기 저항을 낮춥니다. 대상에게 냉기 저항 감소 효과가 이미 적용되어 있는 경우, 일정 확률로 행동 불가 / 받는 피해 증가 / 강화 해제 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "StingerC_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "일점 돌파",
    "img": "AssaultAttack",
    "range": 4,
    "AP": 8,
    "description": "대상에게 돌격해 $(2) 피해를 줍니다. 대상이 빙결 상태인 경우, 피해량이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "StingerC_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "침입자 경계",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 공격한 적에게만 집중해 회피가 크게 증가하지만 받는 피해도 증가합니다.",
    "areadata": [
      5
    ]
  },
  "StingerC_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "강습 준비",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "지정 대상 보호를 받는 상태로 라운드 개시 시, 공격력과 치명타가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Chiller_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "동결 가스",
    "img": "BeamShot",
    "range": 3,
    "AP": 6,
    "attr": "ice",
    "description": "지정 범위에 $(1) 냉기 속성 피해를 주고 대상을 이동 불가 상태로 만듭니다. 대상이 침수 상태인 경우, 행동 불가 / 받는 피해 증가 상태로 만들고 강화 효과를 해제합니다.",
    "areadata": [
      0,
      0,
      0,
      0.5,
      1,
      0,
      0,
      0,
      0
    ]
  },
  "Chiller_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "빙결 코팅",
    "img": "TeamDefBuff",
    "range": 6,
    "AP": 5,
    "description": "지정 아군과 자신에게 방어막을 부여하며, 방어력 증가 / 받는 피해와 화염 저항 감소 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "Chiller_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "급속 냉각",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "자신이 침수 상태로 라운드 개시 시, 공격력 / 회피 / 행동력이 크게 증가하며 최소 피해만 입습니다.",
    "areadata": [
      5
    ]
  },
  "Chiller_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "과열",
    "img": "TeamSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "화염 속성 공격을 맞는 경우, 공격력 / 방어력 / 회피 / 행동력이 크게 감소하며 피해 최소화 상태가 해제됩니다.",
    "areadata": [
      5
    ]
  },
  "LegionElite_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "파쇄 미니건",
    "img": "MGShot",
    "range": 5,
    "AP": 5,
    "description": "미니건을 발사해 $(1.2) 피해를 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가하며, 대상의 피해 감소 효과를 해제합니다.",
    "areadata": [
      5
    ]
  },
  "LegionElite_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "포획탄 발사",
    "img": "SelfSpdDeBuff",
    "range": 5,
    "AP": 4,
    "description": "포획탄을 발사해 $(0.3) 피해를 주고, 3라운드 동안 대상을 이동 불가 / 행동력 감소 / 회피 감소 상태로 만듭니다. 대상이 표식 상태면 일정 확률로 강화 효과를 해제합니다. 스킬 사용 시, 3라운드 동안 자신의 행동력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "LegionElite_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "상황 대응",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "아군 중 HP가 25% 이하인 대상이 있는 경우, 대상의 행동력을 증가시키며 대상의 공격을 지원합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "LegionElite_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "조준 공유 시스템",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "인접 아군의 적중이 증가합니다. 자신이 처치될 경우, 해당 효과를 받는 아군들의 적증 증가 효과를 해제하고 적중을 감소시킵니다.",
    "areadata": [
      8,
      4,
      6,
      2
    ]
  },
  "NightChickTD_TU3_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "방전",
    "img": "Shock",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 자신이 침수 상태인 경우 방전으로 인한 고정 피해를 입습니다. 침수 상태로 처치될 경우, 범위 내 대상들에게 괴멸적인 전기 피해를 줍니다. 해당 효과가 적용되는 대상이 침수 상태인 경우, 행동 불가가 됩니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "Testudo_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "무장 파괴",
    "img": "ARShot",
    "range": 4,
    "AP": 3,
    "description": "대상에게 $(1) 피해를 주고, 일정 확률로 3라운드 동안 공격력 / 치명타 / 적중을 낮춥니다.",
    "areadata": [
      5
    ]
  },
  "Testudo_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "진형 사수",
    "img": "DefCounter",
    "range": 6,
    "AP": 7,
    "description": "3라운드 동안 방어막 / 행 보호가 적용되며 받는 피해가 감소합니다. 해당 상태에서 공격받으면 반격합니다.",
    "areadata": [
      5
    ]
  },
  "Testudo_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "방진 전개",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시 열 보호 효과가 적용되며, 3라운드 동안 범위 내 아군이 받는 피해가 크게 감소합니다.",
    "areadata": [
      8,
      9,
      5,
      6,
      2,
      3
    ]
  },
  "Testudo_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "출력 오버로드",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "아군이 처치될 때마다 방어력이 증가합니다. 아군이 5기 이상 처치되면 공격 능력이 대폭 증가하며, 방어막과 피해 감소 효과를 무시하지만 지속 고정 피해를 입습니다. 해당 상태에서 처치될 경우, <방진 전개> 범위 안에 있는 아군에게 괴멸적인 고정 피해를 줍니다.",
    "areadata": [
      5
    ]
  },
  "CenturionG_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "집속 연장 미사일",
    "img": "MultiMissile",
    "range": 6,
    "AP": 4,
    "description": "지정 범위에 $(1) 피해를 주고, 3라운드 동안 대상을 표식 / 받는 피해 증가 상태로 만들고 AP를 감소시킵니다. 일정 확률로 적중 대상의 강화 효과를 해제합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "CenturionG_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "출력 한도 해제",
    "img": "TeamAtkBuff",
    "range": 6,
    "AP": 8,
    "description": "주변 아군의 공격력 / 치명타 / 행동력을 증가시키고 방어막과 받는 피해 감소 무시 효과를 부여합니다. 해당 효과를 받은 대상은 지속 고정 피해를 입습니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "CenturionG_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "전황 분석",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "피격 시, 모든 아군의 AP가 증가하며 2라운드 동안 효과 저항이 대폭 증가합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "CenturionG_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "현장 수습",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "아군이 처치될 경우, 일정 라운드 동안 반격하며 주변 아군과 자신이 받는 피해가 감소하고 행동력이 증가합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "CenturionG_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "지휘 중추 상실",
    "img": "TeamSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "자신이 처치될 경우, 모든 아군의 공격력 / 치명타 / 적중 /행동력이 크게 감소하며 받는 피해가 증가합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "SeljuqA_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "산탄 포격",
    "img": "CannonShotWide",
    "range": 4,
    "AP": 4,
    "description": "지정 범위에 $(0.8) 피해를 줍니다. 대상이 방어 감소 또는 이동 불가 상태면 피해량이 크게 증가합니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "SeljuqA_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "확산형 곡사포",
    "img": "CannonShotDelay",
    "range": 5,
    "AP": 6,
    "description": "지정 범위에 $(1.2) 보호 무시 피해를 줍니다. 목표 지점 주변은 피해가 75%만 적용되며, 대상이 경장형 또는 기동형이면 피해량이 크게 증가합니다.",
    "areadata": [
      0,
      0.75,
      0,
      0.75,
      1,
      0.75,
      0,
      0.75,
      0
    ]
  },
  "SeljuqA_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "포격 보정",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 적의 움직임을 분석해 적중과 치명타가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "SeljuqA_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "증가 장갑",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시, 방어력이 크게 증가합니다. 해당 효과는 5회 피격되거나 전기 속성 공격을 맞으면 해제됩니다.",
    "areadata": [
      5
    ]
  },
  "GigantesC_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "너클 버스터",
    "img": "MeleeAttack",
    "range": 1,
    "AP": 8,
    "description": "대상을 강타해 $(2.4) 피해를 주고 뒤로 한 칸 밉니다. 자신의 HP %가 낮을수록 피해량이 증가하며, 25% 이하인 경우 방어막과 피해 감소 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "GigantesC_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "차지 스매시",
    "img": "AssaultAttack",
    "range": 2,
    "AP": 4,
    "description": "대상을 밀쳐 $(1) 피해를 주고 2칸 뒤로 날립니다. 피격 대상은 AP가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "GigantesC_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "개량형 방어 OS",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "자신이 공격하기 전까지는 방어력과 효과 저항이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "GigantesC_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "거점 순찰",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "인접한 보호기 제외 아군을 보호하며 대상의 행동력을 증가시킵니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "RocCGenerator_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "전하 충전",
    "img": "SelfAtkBuff",
    "range": 6,
    "AP": 4,
    "description": "로크 (최대 충전)에게 에너지를 충전해 공격력과 AP를 높입니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "RocCGenerator_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "실드 충전",
    "img": "SelfDefBuff",
    "range": 6,
    "AP": 7,
    "description": "모든 아군에게 방어막을 부여합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "RocCGenerator_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "복원 시스템",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 전투 속행 효과가 적용됩니다.",
    "areadata": [
      5
    ]
  },
  "RocCGenerator_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "복원 대기",
    "img": "SelfSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 속행 효과 발동 시, 3라운드 동안 행동 불가 상태가 됩니다.",
    "areadata": [
      5
    ]
  },
  "RocC_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "S. 블리츠 스톰",
    "img": "WideLightning",
    "range": 6,
    "AP": 8,
    "attr": "electric",
    "description": "지정 범위에 $(1) 보호 무시 전기 속성 피해를 주고 AP / 회피 / 행동력 / 전기 저항을 낮춥니다. 목표 지점 주변은 피해량이 50% 감소합니다. <전하 충전> 중첩을 2 사용합니다.",
    "areadata": [
      0,
      0.5,
      0,
      0.5,
      1,
      0.5,
      0,
      0.5,
      0
    ]
  },
  "RocC_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "H. 유피텔 스트라이크",
    "img": "AssaultAttack",
    "range": 6,
    "AP": 9,
    "attr": "electric",
    "description": "지정 대상에게 $(2) 보호 무시 전기 속성 피해를 주고 일정 확률로 행동 불가 상태로 만들며 강화 효과를 해제합니다. <전하 충전> 중첩을 5 사용하며, 치명타 시 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "RocC_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "전자기파 파장",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, <전하 충전> 중첩 수에 비례해 회피가 증가합니다. 적 공격 회피 시, 반격합니다.",
    "areadata": [
      5
    ]
  },
  "RocC_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "전하 최대 충전",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "<전하 충전> 중첩이 5 이상인 경우, 방어막 / 피해 감소 효과를 무시하며 적중과 치명타가 증가합니다. 해당 상태에서 냉기 속성 공격을 맞으면 강화 효과가 해제되며, 행동 불가 상태가 됩니다.",
    "areadata": [
      5
    ]
  },
  "RocC_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "과충전 폭발",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "description": "처치될 경우, 주변에 괴멸적인 고정 피해를 줍니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickC_EV9_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "연료 탱크 유폭",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "attr": "fire",
    "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주고 피해 감소 효과를 해제합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "GigantesC_EV2_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "개량형 방어 OS",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "자신이 공격하기 전까지는 방어력과 효과 저항이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "RocCGeneratorA_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "전하 충전",
    "img": "SelfAtkBuff",
    "range": 6,
    "AP": 10,
    "description": "로크 (최대 충전)에게 에너지를 충전해 공격력과 AP를 높입니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "RocCGeneratorA_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "실드 충전",
    "img": "SelfDefBuff",
    "range": 6,
    "AP": 10,
    "description": "모든 아군에게 방어막을 부여하고 해로운 효과를 해제합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "RocCGeneratorA_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "복원 시스템",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 전투 속행 효과가 적용됩니다. 해당 효과는 해제할 수 없습니다.",
    "areadata": [
      5
    ]
  },
  "RocCGeneratorA_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "복원 대기",
    "img": "SelfSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 속행 효과 발동 시, 4라운드 동안 행동 불가 상태가 되며 받는 피해가 최소화됩니다. 해당 효과는 해제할 수 없습니다.",
    "areadata": [
      5
    ]
  },
  "RocC_EV2_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "S. 블리츠 스톰",
    "img": "WideLightning",
    "range": 6,
    "AP": 8,
    "attr": "electric",
    "description": "지정 범위에 $(1) 보호 무시 전기 속성 피해를 주고 AP / 회피 / 행동력 / 전기 저항을 낮춥니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "RocC_EV2_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "H. 유피텔 스트라이크",
    "img": "AssaultAttack",
    "range": 6,
    "AP": 9,
    "attr": "electric",
    "description": "지정 대상에게 $(2) 보호 무시 전기 속성 피해를 주고, 행동 불가 상태로 만들며 전기 저항을 감소시킵니다. 일정 확률로 강화 효과를 해제합니다. <전하 충전> 중첩을 3 사용하며, 치명타 시 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "RocC_EV2_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "전자기파 파장",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "<전하 충전> 중첩 수에 비례해 회피가 증가하며, 회피 시 반격합니다. 자신의 HP가 25% 이하인 상태로 적을 공격할 때, 회피가 추가로 증가합니다. 냉기 속성 공격 피격 시, 회피 강화 효과가 해제됩니다.",
    "areadata": [
      5
    ]
  },
  "RocC_EV2_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "전하 최대 충전",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "<전하 충전> 중첩이 5 이상인 경우, 2라운드 동안 방어막 / 피해 감소 효과를 무시하며 공격력 / 적중 / 치명타 / 효과 저항이 증가합니다. 해당 상태에서 냉기 속성 공격을 맞으면 강화 효과가 해제되며, 행동 불가 / 받는 피해 증가 상태가 됩니다.",
    "areadata": [
      5
    ]
  },
  "RocC_EV2_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "과충전 폭발",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "description": "처치될 경우, 주변에 괴멸적인 고정 피해를 줍니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "Undine_EV1_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "2연장 리볼버 캐논",
    "img": "MGShot",
    "range": 3,
    "AP": 5,
    "description": "리볼버 캐논으로 단일 대상에게 $(1.2) 피해를 주고, 대상을 도발하며 적중을 감소시킵니다. 대상이 방어력 감소 상태면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Undine_EV1_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "F.F 미사일",
    "img": "Missile",
    "range": 4,
    "AP": 8,
    "description": "날치 미사일로 $(1.8) 피해를 줍니다. 대상의 받는 피해 감소 효과를 무시하며, 대상이 방어력 감소 상태이거나 경장형이면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Undine_EV1_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "우향선회",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 회피가 증가하며 회피 감소 효과가 해제됩니다. 같은 열의 아래에 배치된 아군들에게 공격 지원 / 지정 대상 보호 / 회피 증가 해제 효과를 부여합니다. 자신의 회피 증가 효과는 최대 2번까지 중첩됩니다.",
    "areadata": [
      5,
      2
    ]
  },
  "Undine_EV1_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "오만과 분노",
    "img": "TeamSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 회피 시, 공격력 / 치명타 / 적중 / 행동력이 무작위로 증가합니다. 자신이 적 처치 시, 모든 아군의 회피 증가 효과를 해제하며 회피가 감소하고 받는 피해가 증가합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "Undine_EV2_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "2연장 리볼버 캐논",
    "img": "MGShot",
    "range": 3,
    "AP": 6,
    "description": "리볼버 캐논으로 단일 대상에게 $(1.4) 피해를 주고, 대상을 방어력과 적중을 감소시킵니다. 대상이 도발 상태면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Undine_EV2_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "F.F 미사일",
    "img": "Missile",
    "range": 4,
    "AP": 9,
    "description": "날치 미사일로 $(2.1) 피해를 줍니다. 대상의 방어력을 무시하며, 대상이 도발 상태 또는 중장형이면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Undine_EV2_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "우향선회?",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 회피가 증가하며 회피 감소 효과가 해제됩니다. 양 옆에 배치된 아군들에게 공격 지원 / 지정 대상 보호 / 회피 증가 해제 효과를 부여합니다. 자신의 회피 증가 효과는 최대 2번까지 중첩됩니다.",
    "areadata": [
      8,
      2
    ]
  },
  "Undine_EV2_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "오만과 분노",
    "img": "TeamSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 회피 시, 공격력 / 치명타 / 적중 / 행동력이 무작위로 증가합니다. 자신이 적 처치 시, 모든 아군의 회피 증가 효과를 해제하며 회피가 감소하고 받는 피해가 증가합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "Undine_EV3_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "2연장 리볼버 캐논",
    "img": "MGShot",
    "range": 3,
    "AP": 4,
    "description": "리볼버 캐논으로 단일 대상에게 $(1) 피해를 주고, 대상을 회피와 적중을 감소시킵니다. 대상이 도발 상태면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Undine_EV3_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "F.F 미사일",
    "img": "Missile",
    "range": 4,
    "AP": 7,
    "description": "날치 미사일로 $(1.5) 피해를 줍니다. 대상의 회피 강화 효과를 해제하며, 대상이 도발 상태 또는 기동형이면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Undine_EV3_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "우향선회???",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 회피가 증가하며 회피 감소 효과가 해제됩니다. 같은 열 위에 배치된 아군들에게 공격 지원 / 지정 대상 보호 / 회피 증가 해제 효과를 부여합니다. 자신의 회피 증가 효과는 최대 2번까지 중첩됩니다.",
    "areadata": [
      8,
      5
    ]
  },
  "Undine_EV3_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "오만과 분노",
    "img": "TeamSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 회피 시, 공격력 / 치명타 / 적중 / 행동력이 무작위로 증가합니다. 자신이 적 처치 시, 모든 아군의 회피 증가 효과를 해제하며 회피가 감소하고 받는 피해가 증가합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "AMG11AA_EV5_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "공격 개시",
    "img": "ARShot",
    "range": 5,
    "AP": 4,
    "description": "기총 사격으로 $(1) 피해를 줍니다. 대상이 표식 상태면 피해량이 증가하고, 회피를 감소시킵니다.",
    "areadata": [
      5
    ]
  },
  "AMG11AA_EV5_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "대공 기총 난사",
    "img": "WideBeamShot",
    "range": 1,
    "AP": 6,
    "description": "기총을 난사해 $(1) 피해를 줍니다. 대상이 회피 감소 상태면 피해량이 증가하며, 강화 효과를 해제합니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "AMG11AA_EV5_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "대공 레이더 시스템",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 인접 아군에게 적중 / 치명타 / 대 기동형 피해량 증가 효과를 부여합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "AMG11AA_EV5_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "시스템 과부하",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "파괴되면 주변 아군에게 걸려있는 강화 효과를 해제합니다. 슈퍼 네리(?)의 재촉으로 인한 공격력 증가 효과가 3 중첩 이상인 경우, 라운드 개시 시 방어막 / 피해 감소 무시 효과가 부여됩니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "Nereid_EV1_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "벌집 만들기",
    "img": "MGShot",
    "range": 4,
    "AP": 3,
    "description": "미니건을 발사해 $(1.5) 피해를 줍니다. 대상을 표식으로 설정하고 받는 피해를 증가시킵니다.",
    "areadata": [
      5
    ]
  },
  "Nereid_EV1_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "무차별 난사",
    "img": "MGWideShot",
    "range": 4,
    "AP": 6,
    "description": "미니건을 난사해 대상에게 $(2) 보호 무시 피해를 줍니다. 대상의 강화 효과를 해제하며, 치명타 시 피해량이 증가합니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "Nereid_EV1_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "덤벼덤벼!",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "자신의 남은 HP 비율이 적을수록 적에게 주는 피해가 증가하며, 받는 피해가 감소합니다. 효과 저항이 증가하며, HP 10% 이하 상태로 피격 시 반격합니다.",
    "areadata": [
      5
    ]
  },
  "Nereid_EV1_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "전투 과몰입",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 불능이 될 경우, HP를 회복하고 전투를 속행합니다. 전투 속행 효과 발동 시, 공격력 / 적중 / 치명타 / 행동력이 증가하며 방어막과 피해 감소 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "Nereid_EV1_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "네리와 부하들",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "적 공격 시, 부하들에게 명령을 내려 대상의 공격력 / 적중 / AP를 증가시킵니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "Undine_EV4_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "2연장 리볼버 캐논",
    "img": "MGShot",
    "range": 3,
    "AP": 5,
    "description": "리볼버 캐논으로 단일 대상에게 $(1.2) 피해를 주고, 대상을 도발하며 공격력 / 치명타를 감소시킵니다. 대상이 표식 상태면 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Undine_EV4_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "F.F 미사일",
    "img": "Missile",
    "range": 4,
    "AP": 8,
    "description": "날치 미사일로 $(1.8) 방어 관통 피해를 줍니다. 대상이 표식 상태면 피해량이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Undine_EV4_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "우향선회?!",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 회피가 증가하며 회피 감소 효과가 해제됩니다. 같은 열에 인접한 보호기 제외 아군을 보호하며, 대상에게 공격 지원 / 적중 / 치명타 증가 효과를 부여합니다. 회피 증가 효과는 3회까지 중첩됩니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "Undine_EV4_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "오만과 분노",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "회피 시, 반격하며 회피 증가 효과가 해제됩니다. 회피 시, 주변에 있는 아군을 도발해 공격력 / 치명타를 증가시키지만 적중 감소 / 지정 보호 해제 / 받는 피해 증가 효과를 부여합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "Nereid_EV2_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "벌집 만들기",
    "img": "MGShot",
    "range": 4,
    "AP": 5,
    "description": "미니건을 발사해 $(1.5) 피해를 줍니다. 대상이 표식 상태인 경우, 피해량이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Nereid_EV2_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "무차별 난사",
    "img": "MGWideShot",
    "range": 3,
    "AP": 8,
    "description": "미니건을 난사해 대상에게 $(1.25) 피해를 줍니다. 목표 대상들의 적중 / 회피 / 행동력을 감소시킵니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "Nereid_EV2_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "덤벼덤벼!",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "자신의 남은 HP 비율이 적을수록 적에게 주는 피해가 증가하며, 받는 피해가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "Nereid_EV2_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "전투 과몰입",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 불능이 될 경우, 1회에 한해 HP를 회복하고 전투를 속행합니다. 전투 속행 효과 발동 시, 해당 전투 동안 피해 감소 효과를 무시하며 공격력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "GigantesDagon_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "심해의 분노",
    "img": "MeleeAttack",
    "range": 1,
    "AP": 8,
    "description": "대상을 강타해 $(3) 보호 무시 피해를 줍니다. 대상의 방어력 / 방어막 / 피해 감소 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "GigantesDagon_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "타이달 어썰트",
    "img": "AssaultAttack",
    "range": 2,
    "AP": 6,
    "description": "대상에게 돌격해 $(1.5) 피해를 줍니다. 대상이 표식 상태면 강화 효과를 해제하고 행동 불가 상태로 만든 후, 뒤로 1칸 밀어냅니다.",
    "areadata": [
      5
    ]
  },
  "GigantesDagon_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "심해의 거신",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시 방어력 / 냉기 / 효과 저항이 크게 증가하며, 5라운드 동안 행 보호 / 받는 피해 감소 효과가 적용됩니다.",
    "areadata": [
      5
    ]
  },
  "GigantesDagon_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "보호 전환",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 2라운드 동안 범위 내에 있는 아군에게 지정 대상 보호 효과를 부여합니다.",
    "areadata": [
      8,
      9,
      2,
      3
    ]
  },
  "Sirene_EV1_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "57mm 대공포",
    "img": "MGShot",
    "range": 5,
    "AP": 5,
    "description": "대공포를 발사해 $(1.35) 피해를 주고, 대상을 표식으로 설정해 받는 피해를 증가시키고 회피를 감소시킵니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Sirene_EV1_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "포격 지휘",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 8,
    "description": "범위 내 아군의 AP / 행동력 / 효과 저항을 증가시키고, 대상에게 걸려있는 해로운 효과를 해제합니다. 추가로, 대상들의 공격을 지원합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "Sirene_EV1_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "협차 사격",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 범위 내 아군들의 적중 / 치명타 / 방어 관통을 증가시킵니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "Sirene_EV1_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "요격 모드",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시, AP가 증가하며 받는 피해가 감소합니다. 아군이 처치될 경우, AP가 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Sirene_EV1_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "관측 포격",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 공격 지원을 받는 상태면 적중 / 치명타가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Sirene_EV2_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "203mm 연장포",
    "img": "CannonShot",
    "range": 5,
    "AP": 10,
    "description": "직사 포격으로 지정 범위에 $(2) 피해를 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가합니다.",
    "areadata": [
      8,
      5
    ]
  },
  "Sirene_EV2_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "초토화 포격",
    "img": "AirStrike",
    "range": 5,
    "AP": 10,
    "description": "포격 연사로 지정 범위에 $(1.5) 보호 무시 피해를 줍니다. 목표 지점 주변은 피해량이 25% 감소하며, 대상이 경장 / 중장형이면 피해량 증가하며 1칸 뒤로 밉니다. 스킬 사용 시, 2라운드 동안 행동 불가가 됩니다.",
    "areadata": [
      0.75,
      0.75,
      0.75,
      0.75,
      1,
      0.75,
      0.75,
      0.75,
      0.75
    ]
  },
  "Sirene_EV2_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "협차 사격",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 범위 내 아군들의 적중 / 치명타 / 방어 관통을 증가시킵니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "Sirene_EV2_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "포격 모드",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 공격력 / 방어 관통이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Sirene_EV2_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "관측 포격",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 공격 지원을 받는 상태면 적중 / 치명타가 증가하며, 방어막 / 피해 감소 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickCMP_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "급속 부식탄",
    "img": "Missile",
    "range": 5,
    "AP": 4,
    "description": "급속 부식탄을 발사해 $(0.33) 피해를 줍니다. 2라운드 동안 대상을 급속 부식 상태로 만들어 효과 저항 / 방어력 / 행동력을 감소시키고 매 라운드 지속 피해를 입힙니다. 대상이 이미 부식 상태면 일정 확률로 강화 효과를 해제합니다. ",
    "areadata": [
      5
    ]
  },
  "NightChickCMP_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "급속 부식탄 난사",
    "img": "MultiMissile",
    "range": 4,
    "AP": 7,
    "description": "급속 부식탄을 발사해 지정 범위에 $(0.33) 피해를 줍니다. 2라운드 동안 대상을 급속 부식 상태로 만들어 효과 저항 / 방어력 / 행동력을 감소시키고 매 라운드 지속 피해를 입힙니다. 대상이 이미 부식 상태면 일정 확률로 강화 효과를 해제합니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "NightChickCMP_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "부식액 누출",
    "img": "TeamDefDeBuff",
    "range": 0,
    "AP": 0,
    "description": "적 공격 시, 주변에 부식액이 누출되어 지속 고정 피해를 주며 방어력을 감소시킵니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickCMP_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "내성 장갑",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 당할 경우, 상대의 스킬이 최소 피해로 적용됩니다. 라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
    "areadata": [
      7,
      9,
      5,
      1,
      3
    ]
  },
  "NightChickCMP_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "부식액 폭발",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "description": "화염 속성 액티브 스킬 공격 피격 시, 부식액에 불이 붙어 점화 상태가 됩니다. 점화 상태로 처치되면 부식액 폭발로 범위 내 아군에게 괴멸적인 고정 피해를 입힙니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "BigChickMG_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "파쇄 미사일",
    "img": "CruiseMissile",
    "range": 6,
    "AP": 7,
    "description": "1라운드 후 착탄하며, $(3) 보호 무시 피해를 주는 미사일을 발사합니다. 대상이 경장형 또는 중장형인 경우, 피해량이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "BigChickMG_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "집속 마이크로 미사일",
    "img": "MultiMissile",
    "range": 4,
    "AP": 3,
    "description": "지정 범위에 $(0.25) 보호 무시 피해를 주는 집속 마이크로 미사일을 발사합니다. 3라운드 동안 공격 대상들의 회피를 감소시킵니다. 200%의 추가 적중 보정이 적용됩니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "BigChickMG_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "고속 장전 장치",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 후, 3라운드 동안 행동력이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "BigChickMG_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "MOP 탄두",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "방어 관통이 크게 증가하며, 공격 대상의 방어막과 피해 감소 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "BigChickMG_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "레이더 오류",
    "img": "SelfAtkDeBuff",
    "range": 0,
    "AP": 0,
    "description": "전기 속성 피격 시, 2라운드 동안 적중이 대폭 감소합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickCMS_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "강화 화학탄 발사",
    "img": "Missile",
    "range": 4,
    "AP": 4,
    "description": "강화 화학탄을 발사해 $(0.75) 피해를 줍니다. 3라운드 동안 대상에게 지속 고정 피해를 주고, 일정 확률로 모든 속성 저항과 행동력을 감소시킵니다. ",
    "areadata": [
      5
    ]
  },
  "NightChickCMS_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "집속 화학탄 발사",
    "img": "Missile",
    "range": 4,
    "AP": 8,
    "description": "집속 화학탄을 발사해 $(2) 피해를 줍니다. 3라운드 동안 대상에게 지속 고정 피해를 주고, 일정 확률로 강화 효과를 해제합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickCMS_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "환경 적응 시스템",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 자신과 인접한 아군의 모든 저항력을 올립니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "Stalker_EV2_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "초정밀 저격",
    "img": "Chargeshot",
    "range": 6,
    "AP": 4,
    "description": "레일건 저격으로 $(0.8) 보호 / 방어막 / 피해 감소 무시 피해를 줍니다.",
    "areadata": [
      5
    ]
  },
  "Stalker_EV2_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "조준 개시",
    "img": "SelfAtkBuff",
    "range": 6,
    "AP": 4,
    "description": "레일건을 조준해, 다음 공격이 치명타로 적용되며 일정 라운드 동안 적중이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Stalker_EV2_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "매복 공격",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "후열에 있는 경우, 받는 피해가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "Stalker_EV2_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "영거리 저격",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "전열에 있는 경우, 공격력이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Stalker_EV2_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "리액터 대폭발",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "description": "사망 시, 리액터가 폭발에 주변에 매우 높은 고정 피해를 줍니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "JuggernautP_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "스매셔 펀치",
    "img": "MeleeAttack",
    "range": 1,
    "AP": 10,
    "description": "대상을 강타해 $(3) 피해를 주고, 일정 확률로 행동 불가 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "JuggernautP_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "방벽 무너뜨리기",
    "img": "AssaultAttack",
    "range": 2,
    "AP": 9,
    "description": "대상에게 돌진해 $(2) 피해를 주고, 피해 감소 효과를 해제하며 뒤로 1칸 밀어냅니다.",
    "areadata": [
      5
    ]
  },
  "JuggernautP_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "호위 경보",
    "img": "TeamDefBuff",
    "range": 0,
    "AP": 0,
    "description": "아군이 사망한 경우, 방어 태세로 전환해 행 보호와 열 보호 효과를 활성화합니다.",
    "areadata": [
      5
    ]
  },
  "JuggernautP_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "고밀도 장갑",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 방어력이 증가합니다. HP 25% 이하가 될 경우, 방어력이 추가로 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickCMP_EV2_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "내성 장갑",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 당할 경우, 상대의 스킬이 최소 피해로 적용됩니다. 라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
    "areadata": [
      7,
      9,
      5,
      1,
      3
    ]
  },
  "NightChickCMP_EV2_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "부식액 폭발",
    "img": "SuiceideBomb",
    "range": 0,
    "AP": 0,
    "description": "화염 속성 액티브 스킬 공격 피격 시, 부식액에 불이 붙어 점화 상태가 됩니다. 점화 상태로 처치되면 부식액 폭발로 범위 내 아군에게 괴멸적인 고정 피해를 입힙니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickShEx_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "칙 방패 강타",
    "img": "MeleeAttack",
    "range": 3,
    "AP": 4,
    "description": "대상에게 $(1.1000000000000001) 피해를 주고, 2라운드 동안 도발 / 공격력 / 치명타 감소 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "NightChickShEx_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "칙 보호 개시",
    "img": "SelfDefBuff",
    "range": 6,
    "AP": 6,
    "description": "지정 아군의 AP를 상승시키고, 3라운드 동안 대상을 지정 보호합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickShEx_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "칙 방어 대형",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 받는 피해가 감소하며 속성 저항력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickShEx_TU3_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "칙 방패 강타",
    "img": "MeleeAttack",
    "range": 3,
    "AP": 4,
    "description": "대상에게 $(1.1000000000000001) 피해를 주고, 2라운드 동안 도발 / 공격력 / 치명타 감소 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "NightChickShEx_TU3_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "칙 보호 개시",
    "img": "SelfDefBuff",
    "range": 6,
    "AP": 6,
    "description": "지정 아군의 AP를 상승시키고, 3라운드 동안 대상을 지정 보호합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickShEx_TU3_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "칙 방어 대형",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 받는 피해가 감소하며 속성 저항력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickDEX_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "약점 스캔",
    "img": "Scan",
    "range": 5,
    "AP": 4,
    "description": "목표를 공격 대상으로 지정해 $(1) 피해를 주고, 2라운드 동안 표식 / 받는 피해 증가 / 회피 감소 상태로 만듭니다. 적중 대상은 회피 강화 효과가 해제됩니다. 자신은 3라운드 동안 회피가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickDEX_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "강화 섬광탄",
    "img": "Beam",
    "range": 4,
    "AP": 8,
    "description": "지정한 위치에 섬광탄을 발사해 $(0.5) 피해를 주고, 2라운드 동안 적중 / 치명타를 낮춥니다. 적중 대상은 AP가 감소합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "NightChickDEX_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "경보 레이더",
    "img": "TeamSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시, 모든 아군의 AP / 적중 / 치명타 / 사거리가 증가합니다. 냉기 속성 액티브 스킬 피격 시 아군의 적중 / 치명타 / 사거리 증가 효과가 해제되며, 2라운드 동안 아군들의 적중 / 치명타가 감소합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickDEX_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "레이더 교란",
    "img": "TeamSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시, 모든 적군의 AP / 적중 / 치명타 / 사거리가 감소합니다. 냉기 속성 액티브 스킬 피격 시 적에게 건 적중 / 치명타 / 사거리 감소 효과가 해제되며, 9라운드 동안 적들의 적중 / 치명타가 증가합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "Tarantula_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "히트 머신건",
    "img": "MeleeAttack",
    "range": 4,
    "AP": 4,
    "attr": "fire",
    "description": "대상에게 $(0.8) 화염 속성 피해를 주고, 50% 확률로 최대 3회까지 화염 저항을 감소시킵니다. 치명타 시, 대상의 피해 감소 효과를 해제합니다.",
    "areadata": [
      5
    ]
  },
  "Tarantula_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "자폭 개시",
    "img": "SelfDefBuff",
    "range": 3,
    "AP": 10,
    "attr": "fire",
    "description": "자폭해 지정 범위에 $(4) 화염 속성 피해를 줍니다. 대상의 방어막 / 피해 감소 효과를 무시합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "Tarantula_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "내부 과열",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 시, 과열 상태가 되어 공격력이 증가합니다. 3중첩 이상 시, 회피가 증가하지만 지속 고정 피해를 입습니다. 적의 공격을 회피하면 2라운드 동안 적중이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Tarantula_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "과열 폭발",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "<내부 과열> 3중첩 이상 상태에서 사망 시, 주변에 괴멸적인 고정 피해를 줍니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickShEx_TU4_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "칙 방패 강타",
    "img": "MeleeAttack",
    "range": 3,
    "AP": 4,
    "description": "대상에게 $(1.1000000000000001) 피해를 주고, 2라운드 동안 도발 / 공격력 / 치명타 감소 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "NightChickShEx_TU4_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "칙 보호 개시",
    "img": "SelfDefBuff",
    "range": 6,
    "AP": 6,
    "description": "지정 아군의 AP를 상승시키고, 3라운드 동안 대상을 지정 보호합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickShEx_TU4_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "칙 방어 대형",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 받는 피해가 감소하며 속성 저항력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Tarantula_TU2_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "과열 폭발",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "<내부 과열> 3중첩 이상 상태에서 사망 시, 주변에 괴멸적인 고정 피해를 줍니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickSPW_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "약점 저격",
    "img": "Snipe",
    "range": 5,
    "AP": 4,
    "description": "대상에게 $(1.1000000000000001) 보호 무시 피해를 줍니다. 치명타 시 피해량이 증가하며, 자신이 전열일 경우 대상의 방어막 / 피해 감소 효과를 무시합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickSPW_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "저격 목표 포착",
    "img": "Scan",
    "range": 4,
    "AP": 5,
    "description": "대상에게 $(0.05) 피해를 주고, 2라운드 동안 대상을 표식으로 지정해 받는 피해 증가 / 회피 감소 상태로 만듭니다. 자신은 3라운드 동안 적중 / 회피 / 행동력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickSPW_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "설원 매복",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "냉기 속성 저항이 증가하며, <혹한> 효과를 받는 상태에선 회피가 증가하며 받는 피해가 감소합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickSPW_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "역공 준비",
    "img": "DefCounter",
    "range": 0,
    "AP": 0,
    "description": "공격 회피 시, 반격합니다. 해당 효과 발동 시, 3라운드 동안 치명타가 증가합니다.",
    "areadata": [
      5
    ]
  },
  "MammothW_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "확산 포격",
    "img": "CannonShotWide",
    "range": 2,
    "AP": 6,
    "description": "포격으로 지정 범위에 $(1) 피해를 줍니다. 대상이 회피 / 방어력 감소 상태면 피해량이 증가합니다.",
    "areadata": [
      7,
      4,
      5,
      1
    ]
  },
  "MammothW_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "클러스터 캐논",
    "img": "CannonShotDelay",
    "range": 6,
    "AP": 6,
    "description": "1라운드 뒤에 착탄하는 포격으로 지정 범위에 $(1.35) 보호 무시 피해를 줍니다. 목표 지점은 50% 피해만 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가합니다.",
    "areadata": [
      0,
      1,
      0,
      1,
      0.5,
      1,
      0,
      1,
      0
    ]
  },
  "MammothW_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "설원 위장",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "냉기 속성 저항이 증가하며, <혹한> 효과를 받는 상태에선 방어력 / 효과 저항이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "MammothW_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "포신 급속 냉각",
    "img": "SelfSpdBuff",
    "range": 0,
    "AP": 0,
    "description": "공격 후, 포신을 냉각해 3라운드 동안 행동력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "LegionMk2_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "개량형 미니건",
    "img": "MGShot",
    "range": 5,
    "AP": 4,
    "description": "미니건을 발사해 $(1.1000000000000001) 피해를 줍니다. 치명타 시, 2라운드 동안 대상이 받는 피해가 증가하며 50% 확률로 강화 효과를 해제합니다.",
    "areadata": [
      5
    ]
  },
  "LegionMk2_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "재밍 포획탄",
    "img": "SelfSpdDeBuff",
    "range": 4,
    "AP": 6,
    "description": "포획탄을 발사해 $(0.8) 피해를 주고, 50% 확률로 3라운드 동안 대상을 이동 불가 / 공격력 / 치명타 / 회피 / 행동력 감소 상태로 만듭니다. 스킬 사용 시, 3라운드 동안 자신의 적중이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "LegionMk2_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "요격 포메이션",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시, 범위 내 아군의 AP가 증가합니다. 라운드 개시 시, 대상의 공격을 지원하며 치명타 / 적중을 증가시킵니다.",
    "areadata": [
      8,
      2
    ]
  },
  "LegionMk2_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "회피 패턴 분석",
    "img": "TeamSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 25% 확률로 적의 회피가 감소하며 받는 피해가 증가합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "Frostbite_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "파쇄탄 발사",
    "img": "ShotGun",
    "range": 4,
    "AP": 5,
    "description": "지정 대상에게 $(1.2) 피해를 줍니다. 대상의 방어막 / 피해 감소 효과를 무시합니다. 대상이 빙결 상태일 경우, 피해량이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "Frostbite_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "냉각제 분사",
    "img": "WideIceShot",
    "range": 4,
    "AP": 7,
    "attr": "ice",
    "description": "지정 범위에 $(0.5) 보호 무시 냉기 피해를 줍니다. 3라운드 동안 대상들은 지속 냉기 피해를 입으며, 50% 확률로 회피 / 행동력이 감소합니다. 125%의 적중 보정이 적용됩니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "Frostbite_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "기온 저하",
    "img": "TeamSpdDeBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, <침수> 상태인 바이오로이드들에게 50% 확률로 받는 피해 증가 / 효과 저항 / AP / 회피 감소 상태가 적용됩니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "Frostbite_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "혹한",
    "img": "WideIceShot",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 범위 내 아군에게 <한랭지 적응> 효과가 있으면 대상의 공격력 / 적중 / 회피 / 행동력이 증가합니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "Frostbite_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "강화 빙결 코팅",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시, 방어력이 대폭 증가합니다. 해당 효과는 강화 효과 해제로 해제할 수 없으며, 화염 속성 공격 피격 시 해제됩니다.",
    "areadata": [
      5
    ]
  },
  "NightChickDEAA_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "레이더 교란 파장",
    "img": "Scan",
    "range": 5,
    "AP": 8,
    "description": "교란 파장으로 $(0.1) 보호 무시 피해를 줍니다. 범위 내 대상들은 2라운드 동안 회피 감소 / 받는 피해 증가 상태가 됩니다. 대상이 기동형일 경우, 효과가 2배가 되며 회피 증가 효과를 해제합니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "NightChickDEAA_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "조준 방해",
    "img": "GrenadeAttack_1",
    "range": 5,
    "AP": 8,
    "description": "섬광탄으로 지정 범위에 $(0.2) 보호 무시 피해를 줍니다. 적중 대상은 3라운드 동안 치명타 / 적중 / 방어 관통 감소 상태가 됩니다. 3라운드 동안 자신의 행동력이 증가합니다.",
    "areadata": [
      8,
      5,
      2
    ]
  },
  "NightChickDEAA_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "대공 레이더망",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시, 범위 내 아군의 AP가 증가합니다. 라운드 개시 시, 범위 내 아군의 적중 / 대 기동형 피해량이 증가하며 적중 감소 효과가 해제됩니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickDEAA_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "통신 오류",
    "img": "TeamAtkDeBuff",
    "range": 0,
    "AP": 0,
    "description": "침수 상태로 라운드 개시 시, 자신과 주변 아군의 행동력이 감소하며 10% 확률로 행동 불가 상태가 됩니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "NightChick_C_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "칙 머신건",
    "img": "Shot",
    "range": 5,
    "AP": 4,
    "description": "대상에게 $(1.1000000000000001) 피해를 줍니다. 치명타 시, 75% 확률로 대상의 강화 효과를 해제하며 5라운드 동안 회피를 감소시키고 받는 피해를 증가시킵니다.",
    "areadata": [
      5
    ]
  },
  "NightChick_C_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "칙 머신건 속사",
    "img": "Snipe",
    "range": 6,
    "AP": 3,
    "description": "대상에게 $(0.75) 보호 무시 피해를 줍니다. 대상이 기동형인 경우 강화 효과를 해제하며 피해량이 증가하고, 2라운드 동안 행동 불가 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "NightChick_C_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "칙 포메이션",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "자신과 같은 열에 인접한 아군의 대 기동형 피해량 / 적중 / 회피 / 행동력을 증가시킵니다.",
    "areadata": [
      8,
      2
    ]
  },
  "NightChick_C_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "칙 복원 시스템",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 나이트 칙 실더???의 <복원 시스템 제어> 효과를 받는 상태면 효과 저항이 증가하며, 전투 속행 효과가 적용됩니다. <복원 시스템 제어> 상태에서 전투 속행 시, 영구 적용되는 전투 속행인  <칙 영구 복원> 상태가 됩니다. <칙 영구 복원> 상태로 라운드 개시 시, 공격력 / 적중 / 치명타 / 회피 / 행동력이 증가합니다. 해당 효과들은 강화 해제로 효과로는 해제되지 않습니다.",
    "areadata": [
      5
    ]
  },
  "NightChick_C_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "칙 복원 시스템 오류",
    "img": "SelfDefDeBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, <복원 시스템 오류> 상태면 받는 피해가 증가하며 전투 속행 효과가 제거됩니다.",
    "areadata": [
      5
    ]
  },
  "NightChickM_C_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "칙 미사일",
    "img": "Missile",
    "range": 4,
    "AP": 5,
    "description": "대상에게 $(1.2) 피해를 줍니다. 치명타 시, 75% 확률로 대상의 강화 효과를 해제하며 5라운드 동안 방어력을 감소시키고 받는 피해를 증가시킵니다.",
    "areadata": [
      5
    ]
  },
  "NightChickM_C_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "풀 오픈 칙 미사일",
    "img": "MultiMissile",
    "range": 5,
    "AP": 8,
    "description": "대상에게 $(1.2) 보호 무시 피해를 줍니다. 대상이 중장형일 경우 강화 효과를 해제하며 피해량이 증가하고, 2라운드 동안 방어력 감소 / 행동 불가 상태로 만듭니다.",
    "areadata": [
      8,
      4,
      5,
      6,
      2
    ]
  },
  "NightChickM_C_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "칙 포메이션 (런쳐)",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "자신 앞 / 뒤에 인접한 아군의 공격력 / 치명타 / 행동력을 증가시킵니다.",
    "areadata": [
      4,
      6
    ]
  },
  "NightChickM_C_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "칙 복원 시스템",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 나이트 칙 실더???의 <복원 시스템 제어> 효과를 받는 상태면 효과 저항이 증가하며, 전투 속행 효과가 적용됩니다. <복원 시스템 제어> 상태에서 전투 속행 시, 영구 적용되는 전투 속행인  <칙 영구 복원> 상태가 됩니다. <칙 영구 복원> 상태로 라운드 개시 시, 공격력 / 적중 / 치명타 / 회피 / 행동력이 증가합니다. 해당 효과들은 강화 해제로 효과로는 해제되지 않습니다.",
    "areadata": [
      5
    ]
  },
  "NightChickM_C_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "칙 복원 시스템 오류",
    "img": "SelfDefDeBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, <복원 시스템 오류> 상태면 받는 피해가 증가하며 전투 속행 효과가 제거됩니다.",
    "areadata": [
      5
    ]
  },
  "NightChickS_C_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "칙 마무리 강타",
    "img": "MeleeAttack",
    "range": 5,
    "AP": 4,
    "description": "대상에게 $(1.5) 보호 무시 피해를 줍니다. 대상이 <나이트 칙?> 또는 <나이트 칙 런쳐??>의 해로운 효과가 적용된 상태면 강화 효과를 해제하며 피해량이 크게 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickS_C_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "칙 업그레이드 준비",
    "img": "ShieldWall",
    "range": 6,
    "AP": 8,
    "description": "5라운드 동안 대상을 지정 보호하며 <칙 업그레이드 준비> 효과가 적용됩니다. <칙 업그레이드 준비> 상태인 대상은 다음 라운드부터 <칙 업그레이드> 효과를 받아 공격력 / 적중 / 치명타 / 회피 / 행동력이 증가합니다.",
    "areadata": [
      5
    ]
  },
  "NightChickS_C_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "칙 방패 방어술 (고급)",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, 모든 저항이 증가하며 해로운 효과를 해제합니다. 피격 시, <칙 방패 올리기> 효과가 발동해 2라운드 동안 방어력이 증가합니다. <칙 방패 올리기> 방어력 중첩이 7 이상인 상태에서 추가 피격 시, 해당 효과를 해제하고 해당 라운드 동안 해제 불가능한 피해 최소화 / 반격 효과가 적용됩니다.",
    "areadata": [
      5
    ]
  },
  "NightChickS_C_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "칙 복원 시스템 제어",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "전투 개시 시, 주변 아군들에게 <칙 복원 시스템> 효과가 적용됩니다. 라운드 개시 시, <칙 방패 올리기>중첩이 7 이면 <복원 시스템 오류> 상태가 되어 주변 아군의 <칙 복원 시스템>을 해제합니다. <칙 복원 시스템>은 자신이 <복원 시스템 오류> 상태가 아니면 라운드 개시 시, 다시 활성화됩니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickS_C_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "칙 업그레이드",
    "img": "SelfDefDeBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시, <칙 업그레이드 준비> 상태인 공격기와 지원기의 공격력 / 적중 / 회피 / 치명타 / 행동력이 증가합니다. 공격력 업그레이드가 4단계 이상인 경우, 대상의 공격은 방어력 / 방어막 / 피해 감소 효과를 무시합니다. 대상이 보호기일 경우, 강화 효과가 적용되지 않고 받는 피해가 크게 증가하며 강화 효과가 해제됩니다.",
    "areadata": [
      7,
      8,
      9,
      4,
      5,
      6,
      1,
      2,
      3
    ]
  },
  "EmperorChickSpCH_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "칙 머신캐논",
    "img": "MGShot",
    "range": 5,
    "AP": 5,
    "description": "대구경 기관포로 $(1) 피해를 주고, 대상에게 무작위 방해 효과를 부여합니다.",
    "areadata": [
      5
    ]
  },
  "EmperorChickSpCH_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "분노의 칙 파이널 어택",
    "img": "WideBeamShot",
    "range": 6,
    "AP": 10,
    "description": "끓어오르는 분노를 소모하여 중장형을 선 타겟으로 전 무장을 발사해 목표 범위에 $(1.5) 피해를 줍니다. 목표 중심점 밖일수록 피해가 감소합니다.",
    "areadata": [
      0.5,
      0.75,
      0.5,
      0.75,
      1,
      0.75,
      0.5,
      0.75,
      0.5
    ]
  },
  "EmperorChickSpCH_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "낙오자",
    "img": "SelfAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "철충들이 낙오(파괴)될 때마다 <복수심>이 적용 되고 낙오한 철충이 10마리가 될 시 <끓어오르는 분노> 상태로 <분노의 칙 파이널 어택> 스킬을 사용합니다. 적 군이 사망 시 <사라진 분노>가 적용 되고 3라운드 동안 철충들이 낙오(파괴)되더라도 <복수심>이 발동되지 않습니다.<br><br>복수심 : 공격력 / 방어력 / 적중률 증가<br>끓어오르는 분노 : 해당 상태가 적용 되있을 시 <분노의 칙 파이널 어택> 스킬 사용<br>사라진 분노 : 공격력 / 방어력 감소       낙오자 발생 : 철충들이 낙오(파괴) 된 상태",
    "areadata": [
      5
    ]
  },
  "EmperorChickSpCH_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "지휘 집중",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시 철충들을 일사불란하게 지휘하기 위해<br><지휘 집중>이 적용 됩니다.<br><br>지휘 집중 : 해제 불가의 해로운 효과 저항 적용",
    "areadata": [
      5
    ]
  },
  "EmperorChickSpCH_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "명령",
    "img": "TeamAtkBuff",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시 주위의 모든 철충들에게 쓰러져도 다시 일어날 수 있도록 <근성>을 부여하고 일정 확률로 <공격 명령>을 내립니다.<br><br>근성 : 해제 불가의 전투 속행 효과<br>공격 명령 : 높은 확률로 방어 관통 / 보호막 무시 / 피해 감소 무시 효과 적용",
    "areadata": [
      7,
      8,
      9,
      4,
      6,
      1,
      2,
      3
    ]
  },
  "NightChickSpCH_N_Skill1": {
    "title": "askill1",
    "type": "active",
    "name": "머신건 견제 사격",
    "img": "ARShot",
    "range": 6,
    "AP": 4,
    "description": "머신건 견제 사격으로 $(1) 피해를 주며 방어력을 3라운드 동안 감소 시킵니다.",
    "areadata": [
      5
    ]
  },
  "NightChickSpCH_N_Skill2": {
    "title": "askill2",
    "type": "active",
    "name": "머신건 연사",
    "img": "ARShot",
    "range": 1,
    "AP": 6,
    "description": "머신건을 조준 사격해 $(1.2) 피해를 줍니다. 3라운드 동안 받는 피해가 증가하는 상태로 만듭니다.",
    "areadata": [
      5
    ]
  },
  "NightChickSpCH_N_Skill3": {
    "title": "pskill1",
    "type": "passive",
    "name": "근성",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "솔져 칙들은 낙오(파괴) 되더라도 칙 커맨더가 존재한다면 <근성>으로 다시 일어나 싸웁니다.<br><br>근성 : 해제 불가의 전투 속행 효과",
    "areadata": [
      5
    ]
  },
  "NightChickSpCH_N_Skill4": {
    "title": "pskill2",
    "type": "passive",
    "name": "호위",
    "img": "Move",
    "range": 0,
    "AP": 0,
    "description": "라운드 개시 시 칙 커맨더의 명령을 따르기 위해 <명령 집중>이 적용 되고 <공격 명령>을 받기 전까지 칙 커맨더를 호위하기 위해 주위를 돌아다니다가 간혹 <과부하>에 걸립니다.<br><br>명령 집중 : 해제 불가의 해로운 효과 저항 적용<br>과부하 : 스스로에게 일정량 피해",
    "areadata": [
      5
    ]
  },
  "NightChickSpCH_N_Skill5": {
    "title": "pskill3",
    "type": "passive",
    "name": "희생",
    "img": "SelfDefBuff",
    "range": 0,
    "AP": 0,
    "description": "전열에 있는 경우 자신의 몸을 바쳐 칙 커맨더를 보호할 수 있도록 행 보호가 적용 됩니다.",
    "areadata": [
      5
    ]
  }
};