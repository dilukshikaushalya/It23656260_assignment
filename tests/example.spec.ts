

const { test, expect } = require('@playwright/test');

test.describe('Singlish to Sinhala Conversion Tests', () => {

  // -------------------------------------------------------------------------
  // STEP 1: DEFINE YOUR TEST CASES
  // -------------------------------------------------------------------------
  const testCases = [
    
    // --- POSITIVE SCENARIO ---
    {
      id: 'Pos_Fun_0001',
      input: 'mama heta Anuraadhapure yanna inne',
      expected: 'මම හෙට අනුරාධපුරේ යන්න ඉන්නේ',
      description: 'Simple location statement'
    },
    {
      id: 'Pos_Fun_0002',
      input: 'mama sindhu kiyanavaa',
      expected: 'මම  සින්දු කියනවා',
      description: 'Simple sentences'
    },
    
    {
      id: 'Pos_Fun_0003',
      input: 'mata oyaava balanna oonee',
      expected: 'මට ඔයාව බලන්න ඕනේ',
      description: 'Simple sentences'
    },

      {
      id: 'Pos_Fun_0004',
      input: 'api heta loku siiyalaagee gedhara yanavaa',
      expected: 'අපි හෙට  ලොකු සීයලාගේ  ගෙදර යනවා',
      description: 'Simple future sentences'
    },

      {
      id: 'Pos_Fun_0005',
      input: 'mata oyaagee chaajaree genath dhenna puluvandha?',
      expected: 'මට ඔයාගේ චාජරේ ගෙනත් දෙන්න පුළුවන්ද?',
      description: 'Requests'
    },

    {
      id: 'Pos_Fun_0006',
      input: 'mama naraka naehae',
      expected: 'මම නරක නැහැ',
      description: 'negative sentence forms'
    },
    
       {
      id: 'Pos_Fun_0007',
      input: 'api sellam karanna yanavaa saha passe  paadam karanavaa',
      expected: 'අපි සෙල්ලම් කරන්න යනවා සහ පස්සෙ  පාඩම් කරනවා',
      description: 'Compound sentences (two ideas joined)'
    },
    
     {
      id: 'Pos_Fun_0008',
      input: 'vahaama pitavanna.',
      expected: 'වහාම පිටවන්න.',
      description: 'Imperative (commands) forms'
    },

      {
      id: 'Pos_Fun_0009',
      input: 'mama dhaen pothak kiyavanavaa.',
      expected: 'මම දැන් පොතක් කියවනවා',
      description: 'Tense variations(present)'
    },
    
     {
      id: 'Pos_Fun_0010',
      input: 'mama heta sil gannavaa',
      expected: 'මම හෙට සිල් ගන්නවා',
      description: 'Tense variations(Future)'
    },

     {
      id: 'Pos_Fun_0011',
      input: 'mama eeiye budhun vaendhaa',
      expected: 'මම ඊයේ බුදුන් වැන්දා',
      description: 'Tense variations (past)'
    },
      
     {
      id: 'Pos_Fun_0012',
      input: 'oyaalaa natharavenavadha?',
      expected: 'ඔයාලා නතරවෙනවද?',
      description: 'plural usage and pronoun variations'
    },
    
      {
      id: 'Pos_Fun_0013',
      input: 'mahansi unath api paadam karanna epaeyi.',
      expected: 'මහන්සි උනත් අපි පාඩම් කරන්න එපැයි.',
      description: 'Complex sentences (cause/effect, conditions'
    },
    
      {
      id: 'Pos_Fun_0014',
      input: 'suba hooraavak!',
      expected: 'සුබ හෝරාවක්!',
      description: 'Common greetings'
    },
    
      {
      id: 'Pos_Fun_0015',
      input: 'mata rata yanna oonee',
      expected: 'මට රට යන්න ඕනේ',
      description: 'Proper spacing'
    },
    

    {
      id: 'Pos_Fun_0016',
      input: 'siraavata, supiri machan.',
      expected: 'සිරාවට, සුපිරි මචන්',
      description: 'Slang and colloquial phrasing'
    },
    
    {
      id: 'Pos_Fun_0017',
      input: 'mama  haemadhaama office yanne staff service ekee.',
      expected: 'මම  හැමදාම office යන්නෙ staff service එකේ',
      description: 'Sentences containing places and common English words that should remain as they are'
    },
    
     {
      id: 'Pos_Fun_0018',
      input: ' mata kaNagaatuyi',
      expected: 'මට කණගාටුයි',
      description: 'Frequently used day-to-day expressions'
    },
    
    {
      id: 'Pos_Fun_0019',
      input: 'mata boonikkaa epaa ',
      expected: 'මට බෝනික්කා එපා' ,
      description: 'Negation patterns'
    },
    
     {
      id: 'Pos_Fun_0020',
      input: 'ehema kiyapan',
      expected: 'එහෙම කියපන්' ,
      description: 'Informal phrasing'
    },
   
     {
      id: 'Pos_Fun_0021',
      input: 'novaembar  01',
      expected: 'නොවැම්බර්  01' ,
      description: 'Dates'
    },
    
    {
      id: 'Pos_Fun_0022',
      input: 'Rs. 2000',
      expected: 'Rs. 2000' ,
      description: 'Currency'
    },
  
    {
      id: 'Pos_Fun_0023',
      input: 'mata dhaenaganna oona',
      expected: 'මට දැනගන්න ඕන' ,
      description: 'Multi-word expressions and frequent collocations'
    },

    
   {
      id: 'Pos_Fun_0024',
      input: 'dhigu kaalayak sita kriyaathmaka vuu jala sampath raekagaeniimee vaedapiLiveLa saha nava yoojanaa heethuven rajayee jala aDhikaariyee vathura kotas 410,000k sQQvarDhanaya kiriimata aethi athara, ehi sampuurNa Bhuumi pramaaNaya kiloomiitar 280,000k vana bava , mahaamaarga saha naagarika jala aDhikaariyee amaathYA bimal rathnaayaka sadhahan kaLeeya.,
      expected: 'දිගු කාලයක් සිට ක්‍රියාත්මක වූ ජල සම්පත් රැකගැනීමේ වැඩපිළිවෙළ සහ නව යෝජනා හේතුවෙන් රජයේ ජල අධිකාරියේ වතුර කොටස් 410,000ක් සංවර්ධනය කිරීමට ඇති අතර, එහි සම්පූර්ණ භූමි ප්‍රමාණය කිලෝමීටර් 280,000ක් වන බව මහාමාර්ග සහ නාගරික ජල අධිකාරියේ අමාත්‍ය බිමල් රත්නායක සදහන් කළේය.' ,
      description: 'Paragraph-style input (medium/long)'
    },


    // --- NEGATIVE SCENARIO (Robustness Test) ---
    {
      id: 'Neg_Fun_01',
      input: 'mamanivaaduyanavaa',
      expected: 'මම නිවාඩු යනවා', 
      description: 'Joined words without spaces cause incomplete conversion'
    },
  {
      id: 'Neg_Fun_02',
      input: 'mama boru karanne naa',
      expected: 'මම බොරු කරන්නේ නෑ', 
      description: 'Incorrect handling of negative colloquial verb ending'
    },
  {
      id: 'Neg_Fun_03',
      input: 'mama oya enakam maGA balan hitiya',
      expected: 'මම ඔයා එනකම් මඟ බලන් හිටියා', 
      description: 'Incorrect handling of verb phrase continuity'
    },
  {
      id: 'Neg_Fun_04',
      input: 'ehema kanna epa',
      expected: 'එහෙම කන්න එපා', 
      description: 'Incomplete negative imperative ending'
    },
  {
      id: 'Neg_Fun_05',
      input: 'api sindhuvak kiyamudhaa?',
      expected: 'අපි සින්දුවක් කියමුද?', 
      description: 'Incorrect handling of question particle in suggestion'
    },
  {
      id: 'Neg_Fun_06',
      input: 'api kaema kanava',
      expected: 'අපි කෑම කනවා', 
      description: 'Incorrect handling of vowel and spelling'
    },

  {
      id: 'Neg_Fun_07',
      input: 'naevatha ennaa',
      expected: 'නැවත එන්න', 
      description: 'Imperative (commands) forms'
    },

{
      id: 'Neg_Fun_08',
      input: 'eyaala enava',
      expected: 'එයාලා එනවා', 
      description: 'Incomplete negative imperative ending'
    },

   {
      id: 'Neg_Fun_09',
      input: 'ayuboovan!',
      expected: 'ආයුබෝවන්!', 
      description: 'Greetings'
    },

   {
      id: 'Neg_Fun_10',
      input: 'mata eya ekka katha karanna onee',
      expected: 'මට එයා එක්ක කතා කරන්න ඕනේ ', 
      description: 'Incorrect handling of noun vowel and modal verb'
    },


    // --- ADD YOUR REMAINING TEST CASES BELOW THIS LINE ---

  ];

  // -------------------------------------------------------------------------
  // STEP 2: FUNCTIONAL TEST AUTOMATION LOGIC
  // -------------------------------------------------------------------------
  for (const data of testCases) {
    test(`${data.id}: ${data.description}`, async ({ page }) => {
      
      // 1. Open the website
      await page.goto('https://www.swifttranslator.com/');

      // 2. Type the Singlish input
      await page.getByPlaceholder('Input Your Singlish Text Here.').fill(data.input);

      // 3. Wait for the translation to appear
      await page.waitForTimeout(3000); 

      // 4. CAPTURE ACTUAL OUTPUT
      // FIX: Targeting the Output DIV using its specific class (bg-slate-50)
      // We use .first() in case there are multiple, but this class is usually unique to the output box.
      const outputLocator = page.locator('div.bg-slate-50').first();
      
      // FIX: Using innerText() because it is a <div>, not an input box
      const actualOutput = await outputLocator.innerText();

      // 5. LOG THE RESULT (Check your VS Code Terminal for this!)
      console.log(`---------------------------------------------------`);
      console.log(`[${data.id}] Input:    "${data.input}"`);
      console.log(`           Expected: "${data.expected}"`);
      console.log(`           Actual:   "${actualOutput.trim()}"`);
      console.log(`---------------------------------------------------`);

      // 6. VERIFY
      // This will check if the text inside the box matches your expectation.
      expect(actualOutput.trim()).toBe(data.expected);
    });
  }

  // -------------------------------------------------------------------------
  // STEP 3: UI TEST SCENARIO
  // -------------------------------------------------------------------------
  import { test, expect } from '@playwright/test';

test('Pos_UI_0002: Verify real-time Sinhala output updates for medium-length input', async ({ page }) => {
  
  // Navigate to the application
  await page.goto('https://www.swifttranslator.com/');

  // Input locator (Singlish input box)
  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');

  // Type step by step to simulate real-time typing
  await inputBox.type('mama', { delay: 200 });
  await page.waitForTimeout(500);

  // Locate Sinhala output area
  const outputBox = page.locator('div.bg-slate-50').first();

  // Verify partial real-time output
  let outputText = await outputBox.innerText();
  expect(outputText).toContain('මම');

  // Continue typing full sentence
  await inputBox.type(' nivaaduvak gatha karanna yanavaa', { delay: 200 });
  await page.waitForTimeout(1000);

  // Verify final real-time converted output
  outputText = await outputBox.innerText();
  expect(outputText).toContain('මම නිවාඩුවක් ගත කරන්න යනවා');
});

