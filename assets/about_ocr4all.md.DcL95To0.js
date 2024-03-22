import{_ as r,c as a,m as e,a as i,t as o,a4 as n,o as l,a5 as s,a6 as h,a7 as c}from"./chunks/framework.DkPDcRBT.js";const R=JSON.parse('{"title":"What is OCR4all?","description":"","frontmatter":{"title":"What is OCR4all?"},"headers":[],"relativePath":"about/ocr4all.md","filePath":"about/ocr4all.md","lastUpdated":1711104152000}'),d={name:"about/ocr4all.md"},p={id:"frontmatter-title",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),f=n('<p>OCR4all combines various open-source solutions to provide a fully automated workflow for automatic text recognition of historical printed (OCR) and handwritten (HTR) material. At pretty much any stage of the workflow the user can interact with the results in order to minimize consequential errors and optimize the end result.</p><p>Due to its comprehensible and intuitive handling OCR4all explicitly addresses the needs of non-technical users.</p><p>With the <a href="http://kallimachos.de/kallimachos/index.php/Kallimachos_II_(Eingehende_Darstellung)#AP1:_OCR-Optimierung" target="_blank" rel="noreferrer">closure</a> of the second project stage of the BMBF-funded joint project <a href="http://kallimachos.de" target="_blank" rel="noreferrer">Kallimachos</a> the software is now being established at the <a href="https://www.uni-wuerzburg.de/zpd" target="_blank" rel="noreferrer">center for philology and digitally</a> of the University of Würzburg, which opens the program up for the widest possible user group.</p><h3 id="workflow" tabindex="-1">Workflow <a class="header-anchor" href="#workflow" aria-label="Permalink to &quot;Workflow&quot;">​</a></h3><p>The workflow starts with the Preprocessing of the relevant image files. Layout segmentation (so-called Region Segmentation carried out with <a href="https://github.com/OCR4all/LAREX" target="_blank" rel="noreferrer">LAREX</a> and Line Segmentation follow. Next is the Text Recognition which is carried out with <a href="https://github.com/Calamari-OCR" target="_blank" rel="noreferrer">Calamari</a>. The final stage is the correction of the recognized texts the so-called Ground Truth Production. This Ground Truth is then the foundation for creating work-specific OCR models in a training module. Therefore OCR4all entails a full-featured OCR workflow.</p><p><img src="'+s+'" alt="Workflow"></p><p>Particularly due to the capacity to create and train work-specific text recognition models, OCR4all makes achieving high-quality results in the digitization of texts in nearly all printed documents possible.</p><p><img src="'+h+'" alt="Segmentation"><img src="'+c+`" alt="Correction"></p><h3 id="cooperation-with-ocr-d" tabindex="-1">Cooperation with OCR-D <a class="header-anchor" href="#cooperation-with-ocr-d" aria-label="Permalink to &quot;Cooperation with OCR-D&quot;">​</a></h3><p>In the summer of 2020, a co-operation between OCR4all and the coordinated funding initiative for further development of processes involving Optical Character Recognition (<a href="https://ocr-d.de" target="_blank" rel="noreferrer">OCR-D</a>) was arranged.</p><p>The main goal of the DFG-funded OCR-D project was the conceptual as well as technical preparation of the mass digitization of printed texts published in german-speaking areas from the 16th to the 18th century (VD16, VD17, VD18).</p><p>For this purpose, the automatic full-text recognition, analogous to the OCR4all approach, is divided into individual process steps that can be reproduced in the Open Source OCR-D software. This aims to create optimized workflows for the old prints to be processed and thus generating scientifically applicable full texts.</p><p>The aim of the co-operation is not only the continuous exchange of information mainly about interfaces, scalable software implementations, creation and provision of GT but the upcoming developments in the OCR field as well. Furthermore, it strives to achieve a technical convergence of the two projects. For this purpose, OCR4all will implement the OCR-D specifications in its OCR solution and realize its interfaces for OCR-D tools. With OCR4all&#39;s internal use of OCR-D solutions, OCR4all users will benefit from the extended selection of tools and the associated possibilities, whereas OCR-D will have a broader scope and, through simplified access, will also reach new user groups inside and outside VD mass digitization.</p><h3 id="reporting-assortment" tabindex="-1">Reporting (assortment) <a class="header-anchor" href="#reporting-assortment" aria-label="Permalink to &quot;Reporting (assortment)&quot;">​</a></h3><ul><li>einBlick: <a href="https://www.uni-wuerzburg.de/aktuelles/einblick/single/news/historische-schriften-digital-erkennen/" target="_blank" rel="noreferrer">Historische Schriften digital erkennen</a></li><li>Radiointerview SWR2 Impuls: Mittelalterliche Handschriften werden Textdokumente</li><li><a href="https://fortext.net/tools/tools/ocr4all" target="_blank" rel="noreferrer">Toolvorstellung</a> im Rahmen des DFG-geförderten Projekts <a href="https://fortext.net" target="_blank" rel="noreferrer">forText</a></li><li>Dr. Johann Ramminger: <a href="https://jramminger.github.io/ocr4all" target="_blank" rel="noreferrer">ocr4all - OCR for Incunables</a></li><li>Der Tagesspiegel: Computertool für alte Texte</li><li>Der Standard: <a href="https://www.derstandard.de/story/2000101916347/zuverlaessige-texterkennungs-tool-fuer-historische-druckschriften" target="_blank" rel="noreferrer">Zuverlässiges Texterkennungs-Tool für historische Druckschriften</a></li><li>Augsburger Allgemeine: <a href="https://www.augsburger-allgemeine.de/bayern/Computer-liest-alte-Texte-id54130851.html" target="_blank" rel="noreferrer">Computer liest alte Texte</a></li><li>einBlick: <a href="https://www.uni-wuerzburg.de/aktuelles/einblick/single/news/modernes-tool-fuer-alte-texte" target="_blank" rel="noreferrer">Modernes Tool für alte Texte</a></li></ul><h3 id="cite" tabindex="-1">Cite <a class="header-anchor" href="#cite" aria-label="Permalink to &quot;Cite&quot;">​</a></h3><p>If you are using OCR4all please cite the corresponding <a href="https://www.mdpi.com/2076-3417/9/22/4853" target="_blank" rel="noreferrer">paper</a>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Reul, C., Christ, D., Hartelt, A., Balbach, N., Wehner, M., Springmann, U., Wick, C., Grundig, Büttner, A., C.,</span></span>
<span class="line"><span>Puppe, F.: OCR4all — An open-source tool providing a (semi-) automatic OCR workflow for historical printings,</span></span>
<span class="line"><span>Applied Sciences 9(22) (2019)</span></span></code></pre></div><h3 id="funding" tabindex="-1">Funding <a class="header-anchor" href="#funding" aria-label="Permalink to &quot;Funding&quot;">​</a></h3><ul><li><a href="https://ocr-d.de/en/" target="_blank" rel="noreferrer">DFG-funded Initiative &quot;OCR-D&quot;</a>, (phase 2 and 3)</li><li><a href="https://www.uni-wuerzburg.de/zpd" target="_blank" rel="noreferrer">Center for Philology and Digitality (ZPD)</a>, University of Würzburg</li><li>BMBF-funded Project <a href="http://kallimachos.de" target="_blank" rel="noreferrer">Kallimachos</a></li><li><a href="https://www.informatik.uni-wuerzburg.de/is" target="_blank" rel="noreferrer">Chair of Computer Science VI - Artificial Intelligence and Applied Computer Science</a>, University of Würzburg</li></ul>`,20);function g(t,m,w,b,k,C){return l(),a("div",null,[e("h1",p,[i(o(t.$frontmatter.title)+" ",1),u]),f])}const O=r(d,[["render",g]]);export{R as __pageData,O as default};
