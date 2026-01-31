const { test, expect } = require("@playwright/test");

const cases = [
  {
    id: "Pos_Fun_001",
    input: "suBha raathriyak!",
    expected: "සුභ රාත්‍රියක්!",
  },
  {
    id: "Pos_Fun_002",
    input: "mama gedhara vaeda tika okkoma karaa",
    expected: "මම ගෙදර වැඩ ටික ඔක්කොම කරා",
  },
  {
    id: "Pos_Fun_003",
    input: "mama vaedata gihin havasa beheth ganna yanavaa",
    expected: "මම වැඩට ගිහින් හවස බෙහෙත් ගන්න යනවා",
  },
  {
    id: "Pos_Fun_004",
    input: "oyaa vaeradhi, api gihin kaagen hari ahamu",
    expected: "ඔයා වැරදි, අපි ගිහින් කාගෙන් හරි අහමු",
  },
  {
    id: "Pos_Fun_005",
    input: "oyaa vaeda okkoma ivaradha?",
    expected: "ඔයා වැඩ ඔක්කොම ඉවරද?",
  },
  {
    id: "Pos_Fun_006",
    input: "anivaaryenma heta enna",
    expected: "අනිවාර්යෙන්ම හෙට එන්න",
  },
  {
    id: "Pos_Fun_007",
    input: "oyaa hariyatama eeka karalaa thiyanavaa",
    expected: "ඔයා හරියටම ඒක කරලා තියනවා",
  },
  {
    id: "Pos_Fun_008",
    input: "mata eeka karanna baee",
    expected: "මට ඒක කරන්න බෑ",
  },
  {
    id: "Pos_Fun_009",
    input: "uda thattuvee meese uda thiyana magee bag eka genath dhenna puluvandha?",
    expected: "උඩ තට්ටුවේ මේසෙ උඩ තියන මගේ bag එක ගෙනත් දෙන්න පුලුවන්ද?",
  },
  {
    id: "Pos_Fun_010",
    input: "hari mama adha dhavasa aethulatha evannam",
    expected: "හරි මම අද දවස ඇතුලත එවන්නම්",
  },
  {
    id: "Pos_Fun_011",
    input: "karuNaakaralaa oyaata mata ara almaariya uda thiyana lipi gonuva aran dhenna puluvandha?",
    expected: "කරුණාකරලා ඔයාට මට අර අල්මාරිය උඩ තියන ලිපි ගොනුව අරන් දෙන්න පුලුවන්ද?",
  },
  {
    id: "Pos_Fun_012",
    input: "eeyi meheta varen",
    expected: "ඒයි මෙහෙට වරෙන්",
  },
  {
    id: "Pos_Fun_013",
    input: "mata badaginii",
    expected: "මට බඩගිනී",
  },
  {
    id: "Pos_Fun_014",
    input: "mama iiyee koLaBA giyaanee",
    expected: "මම ඊයේ කොළඹ ගියානේ"
  },
  {
    id: "Pos_Fun_015",
    input: "enavaa enavaa",
    expected: "එනවා එනවා",
  },
  {
    id: "Pos_Fun_016",
    input: "mama Zoom meeting eka schedule karaa",
    expected: "මම Zoom meeting එක schedule කරා",
  },
  {
    id: "Pos_Fun_017",
    input: "magee ID eka evanna",
    expected: "මගේ ID එක එවන්න",
  },
  {
    id: "Pos_Fun_018",
    input: "api assignment eka karamu",
    expected: "අපි assignment එක කරමු",
  },
  {
    id: "Pos_Fun_019",
    input: "adha mata class ekata yanna late vuNaa, ee nisaa mata ikmanin campus yanna sidhDha vuNaa, but luckily lectures start velaa thibuNee naethi nisaa problem ekak velaa naehae.",
    expected: "අද මට class එකට යන්න late වුණා, ඒ නිසා මට ඉක්මනින් campus යන්න සිද්ධ වුණා, but luckily lectures start වෙලා තිබුණේ නැති නිසා problem එකක් වෙලා නැහැ.",
  },
  {
    id: "Pos_Fun_020",
    input: "Dell pc ekak dhaen Rs.549,990 venavaa",
    expected: "Dell pc එකක් දැන් Rs.549,990 වෙනවා",
  },
  {
    id: "Pos_Fun_021",
    input: "heta 8.30 AM vedhdhi lectures patan gannavaa",
    expected: "හෙට 8.30 AM වෙද්දි lectures පටන් ගන්නවා",
  },
  {
    id: "Pos_Fun_022",
    input: "mama pebaravaari 4 gedhara yanavaa. oyaa enavadha?",
    expected: "මම පෙබරවාරි 4 ගෙදර යනවා. ඔයා එනවද?",
  },
  {
    id: "Pos_Fun_023",
    input: "adoo vaeddek thamaa ah!",
    expected: "අඩෝ වැඩ්ඩෙක් තමා අහ්!",
  },
  {
    id: "Pos_Fun_024",
    input: "adha lookayee thaakShaNaya minisungee jiivithayata vishaala balapaeemak sidhu karamin aetha. jQQgama dhurakaThana, antharjaalaya saha dijital yedhum Bhaavithayen aDhYaapanaya, vYaapaara saha sanniveedhanaya vadaa pahasu saha veegavath vii aetha. vishvavidhYaala sisunta maargagatha igenum pahasukam harahaa dhaenuma puLul karagaeniimata haeki vii aetha. kesee vethath, thaakShaNaya aDhika lesa Bhaavithaa kiriima magin kaalaya aparaaDha viima saha samaaja sambanDhathaa aduviima vaeni gaetaLu dha aethi viya haeka.",
    expected: "අද ලෝකයේ තාක්ෂණය මිනිසුන්ගේ ජීවිතයට විශාල බලපෑමක් සිදු කරමින් ඇත. ජංගම දුරකථන, අන්තර්ජාලය සහ ඩිජිටල් යෙදුම් භාවිතයෙන් අධ්‍යාපනය, ව්‍යාපාර සහ සන්නිවේදනය වඩා පහසු සහ වේගවත් වී ඇත. විශ්වවිද්‍යාල සිසුන්ට මාර්ගගත ඉගෙනුම් පහසුකම් හරහා දැනුම පුළුල් කරගැනීමට හැකි වී ඇත. කෙසේ වෙතත්, තාක්ෂණය අධික ලෙස භාවිතා කිරීම මගින් කාලය අපරාධ වීම සහ සමාජ සම්බන්ධතා අඩුවීම වැනි ගැටළු ද ඇති විය හැක.",
  },
  {
    id: "Pos_Fun_025",
    input: "Login button eka click kaLa vita error message nopenviya yuthu athara, dashboard pituva nivaeradhiva load viya yuthuya",
    expected: "Login button එක click කළ විට error message නොපෙන්විය යුතු අතර, dashboard පිටුව නිවැරදිව load විය යුතුය",
  },
  {
    id: "Neg_UI_001",
    input: "machan",
    expected: "මචං",
  },
  {
    id: "Neg_Fun_001",
    input: "course ekata register venna https://student360.sliit.lk portal eka use karanna",
    expected: "course එකට register වෙන්න https://student360.sliit.lk portal එක use කරන්න",
  },
  {
    id: "Neg_Fun_002",
    input: "npm start command eka run karanna",
    expected: "npm start command එක run කරන්න",
  },
  {
    id: "Neg_Fun_003",
    input: "mamavaedaokkomaivarakaraa",
    expected: "මම වැඩ ඔක්කොම ඉවර කරා",
  },
  {
    id: "Neg_Fun_004",
    input: "What is your name?",
    expected: "What is your name?",
  },
  {
    id: "Neg_Fun_005",
    input: "student@sliit.lk use karala visthara dhaenaganna",
    expected: "student@sliit.lk use කරල විස්තර දැනගන්න",
  },
  {
    id: "Neg_Fun_006",
    input: "file eka RemoteController.php vidhihata save karanna",
    expected: "file එක RemoteController.php  විදිහට save කරන්න",
  },
  {
    id: "Neg_Fun_007",
    input: "MySQL Bhaavithayen tutorial eka complete karanna",
    expected: "MySQL භාවිතයෙන් tutorial එක complete කරන්න",
  },
  {
    id: "Neg_Fun_008",
    input: "config.json file eka open karanna",
    expected: "config.json file එක open කරන්න",
  },
  {
    id: "Neg_Fun_009",
    input: "kohomadha ban",
    expected: "කොහොමද බං",
  },
  {
    id: "Neg_Fun_010",
    input: "samaagamee vatinaa thorathuru aarakShaa kiriimata cyber security athYAvashYA vee",
    expected: "සමාගමේ වටිනා තොරතුරු ආරක්ෂා කිරීමට cyber security අත්‍යවශ්‍ය වේ",
  },
];

test.describe("SwiftTranslator - Positive functional tests", () => {
  for (const tc of cases) {
    test(`${tc.id}`, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/");
      const inputBox = page.getByRole("textbox", {
        name: "Input Your Singlish Text Here.",
      });
      await inputBox.fill(tc.input);
      await expect(page.getByText(tc.expected)).toBeVisible();
    });
  }
});