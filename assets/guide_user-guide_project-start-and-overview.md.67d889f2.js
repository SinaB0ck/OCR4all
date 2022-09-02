import{_ as i,c as o,b as e,d as r,t as a,a as n,o as l}from"./app.a772793a.js";const s="/images/user-guide/project_start_and_overview/project_overview_settings.jpg",c="/images/user-guide/project_start_and_overview/data_conversion_request.png",p="/images/user-guide/project_start_and_overview/overview.png",y=JSON.parse('{"title":"Project Start and Overview","description":"","frontmatter":{"title":"Project Start and Overview"},"headers":[],"relativePath":"guide/user-guide/project-start-and-overview.md","lastUpdated":1662120370000}'),d={name:"guide/user-guide/project-start-and-overview.md"},u={id:"frontmatter-title",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=n('<p><strong>Start Docker:</strong></p><ul><li>Linux: Docker will start automatically after the computer starts</li><li>Docker for Windows: start Docker by clicking on the Docker icon (in \u2018Programs\u2019) \u2013 wait until \u201CDocker is running\u201D pops up</li><li>Docker Toolbox: open the Docker QuickStart terminal and wait until \u201CDocker is configured to use default machine\u2026\u201D pops up</li></ul><p><strong>Start OCR4all:</strong></p><ul><li>Linux: open the terminal, type in <code>docker start -ia ocr4all</code>, press &#39;enter&#39; and wait for the server to start</li><li>Windows 10 (Home, Pro, Enterprise, Education): open Windows PowerShell, type in <code>docker start -ia ocr4all</code>, press &#39;enter&#39; and wait for the server to start</li><li>Older Versions of Windows (with Docker Toolbox): open the Docker QuickStart terminal and wait until \u201CDocker is configured to use default machine\u2026\u201D pops up</li></ul><p>After this initial installation, you will be able to easily access OCR4all in your browser, respectively under:</p><ul><li>Linux, Docker for Windows, macOS: <code>http://localhost:1476/ocr4all/</code></li><li>Docker Toolbox: <code>http://192.168.99.100:1476/ocr4all/</code></li></ul><p>Once OCR4all has been opened in a browser, the user will automatically land on the &#39;Project Overview&#39; starting page. From there, they will be able to access several features:</p><ul><li>&#39;<strong>Settings</strong>&#39;: This feature allows for selecting the book set to be worked on, which can be chosen from the dropdown menu found under \u2018Project selection\u2019 \u2013 the title having been previously saved as a folder under ocr4all/data/book title (see 1.2). Additionally, the \u2018gray\u2019 setting must be selected under the menu point \u2018Project image type\u2019.</li></ul><p><img src="'+s+'" alt="Abb2.jpg"></p><p>fig. 2: Project Overview settings.</p><ul><li><p>Following this initial set up, click on \u2018load project\u2019 in order for the book in question to be uploaded to the OCR4all platform. Seeing as OCR4all only accepts certain file designations and formats (i.e. 0001.png etc.), a data conversion might be requested which can be directly carried out in OCR4all (fig. 3).</p></li><li><p>It is irrelevant whether a PDF or individual images were placed in the &#39;input&#39; folder. If possible, however, single images are usually preferred.</p></li></ul><p><img src="'+c+`" alt="Abb3.png"></p><p>fig. 3. Data conversion request (i.g. PDF in &#39;input&#39; folder).</p><ul><li>In OCR4all, all data generated during the workflow and for its functioning are saved in a single PageXML file per scan page and are no longer kept in the form of many individual files. If project data from previous versions is still available, it is now possible to convert the project automatically into the structure required by OCR4all.</li></ul><pre>
BILD BILD

</pre><p>fig. 4: possible conversion of a Legacy-Project.</p><ul><li>The feature &quot;Overview&quot; provides the user with a tabular presentation of the project\u2019s ongoing progress (fig. 4). Each row corresponds to an individual book page, labelled by a page identifier (far left column). The following columns illustrate, from left to right, the workflow\u2019s progression. Once a particular step has been executed, it will appear as completed (green check mark) in that work stage\u2019s specific column.</li></ul><p><img src="`+p+'" alt="Abb4.png"></p><p>fig. 5: Overview.</p><ul><li><p>Clicking on an individual page\u2019s identifier enables the user to check on the state of that specific page\u2019s processing, as well as on the data generated by it, at any time during the workflow. To this effect, please use the \u2018images\u2019 column, as well as the subsequent options: \u2018original\u2019, \u2018binary\u2019, \u2018gray\u2019 and \u2018noise removal\u2019.</p></li><li><p>With the button &quot;Export GT&quot; (top right) all data created in the course of the project can be exported and packed as a zip folder within &#39;data&#39;.</p></li></ul>',20);function f(t,m,w,v,_,b){return l(),o("div",null,[e("h1",u,[r(a(t.$frontmatter.title)+" ",1),g]),h])}const D=i(d,[["render",f]]);export{y as __pageData,D as default};
