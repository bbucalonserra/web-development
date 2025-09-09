# Web Development - Website about the internet in Brazil
This repository contains the web development project regarding the history of the internet in Brazil. Check below the repository tree for better understanding:

```
├── project
│   ├── assets\pictures
│   │   ├── br-flag.png
│   │   ├── commercial_internet - Copia.png
│   │   ├── commercial_internet.png
│   │   ├── computer - Copia.png
│   │   ├── computer.png
│   │   ├── popularization - Copia.png
│   │   ├── popularization.png
│   │   └── uol_logo.png
│   │
│   ├── data
│   │   ├── first_steps_internet.json
│   │   ├── index.json
│   │   ├── the_commercial_internet_and_popularization.json
│   │   └── the_internet_in_contemporary_brazil.json
│   │
│   ├── first_steps_internet.html
│   ├── handlebars.js
│   ├── index.html
│   ├── privacy_policy.html
│   ├── README.md
│   ├── script.js
│   ├── style.css
│   ├── terms_of_use.html
│   ├── the_commercial_internet_and_popularization.html
│   └── the_internet_in_contemporary_brazil.html

```

## HTML
Used to build the main structure of the webpage. The main tags are:

| TAG                                   | Meaning                | Function (What it does)                                                                 |
|:--------------------------------------|:-----------------------|:----------------------------------------------------------------------------------------|
| `<!DOCTYPE html>`                     | Document Type          | Declares that the document is HTML5 (no closing tag)                                    |
| `<html> ... </html>`                  | HTML Root              | Root element that contains the whole HTML document                                      |
| `<head> ... </head>`                  | Head                   | Contains metadata (title, charset, links, styles, scripts)                              |
| `<title> ... </title>`                | Title                  | Title of the page (shown in browser tab/search engines)                                 |
| `<meta>`                              | Metadata               | Provides info like charset, viewport, SEO description (no closing tag)                  |
| `<link>`                              | Link                   | Links external resources (CSS, icons, etc.) (no closing tag)                            |
| `<script> ... </script>`              | Script                 | Adds JavaScript (inline or external)                                                    |
| `<body> ... </body>`                  | Body                   | Contains all visible content of the webpage                                             |
| `<header> ... </header>`              | Header                 | Introductory content (logo, nav, title) of page or section                              |
| `<nav> ... </nav>`                    | Navigation             | Defines a block of navigation links                                                     |
| `<main> ... </main>`                  | Main                   | Unique main content of the document (1 per page)                                        |
| `<section> ... </section>`            | Section                | Thematic grouping of content                                                            |
| `<article> ... </article>`            | Article                | Independent, self-contained content (blog post, news, forum entry)                      |
| `<aside> ... </aside>`                | Aside                  | Side content related to main (sidebar, ads, extra info)                                 |
| `<footer> ... </footer>`              | Footer                 | Closing content (copyright, links, contact) of page or section                          |
| `<h1> ... </h1>` until `<h6> ... </h6>` | Heading 1 to 6       | Headings and subheadings (hierarchy of titles)                                          |
| `<p> ... </p>`                        | Paragraph              | Defines a block of text as a paragraph                                                  |
| `<address> ... </address>`            | Address                | Defines contact information (author, organization)                                      |
| `<figure> ... </figure>`              | Figure                 | Groups images, diagrams, code snippets                                                  |
| `<figcaption> ... </figcaption>`      | Figure Caption         | Caption for `<figure>`                                                                  |
| `<time> ... </time>`                  | Time                   | Represents a date or time                                                               |
| `<mark> ... </mark>`                  | Mark                   | Highlights text (like a marker)                                                         |
| `<em> ... </em>`                      | Emphasis               | Emphasizes text (usually italic, stress emphasis)                                       |
| `<strong> ... </strong>`              | Strong                 | Marks text as important (usually bold)                                                  |
| `<blockquote> ... </blockquote>`      | Block Quote            | Large quotations (multi-line)                                                           |
| `<q> ... </q>`                        | Quote                  | Short inline quotation                                                                  |
| `<code> ... </code>`                  | Code                   | Inline code snippet                                                                     |
| `<pre> ... </pre>`                    | Preformatted           | Preserves spacing/line breaks (used for code blocks)                                    |
| `<ul> ... </ul>`                      | Unordered List         | Creates a bullet-point list, that's why is unordered                                    |
| `<ol> ... </ol>`                      | Ordered List           | Creates a numbered list, that's why is ordered                                          |
| `<li> ... </li>`                      | List Item              | Defines an item inside `<ul>` or `<ol>`                                                 |
| `<dl> ... </dl>`                      | Description List       | Creates a list of terms and their descriptions                                          |
| `<dt> ... </dt>`                      | Description Term       | Defines the term in a description list                                                  |
| `<dd> ... </dd>`                      | Description Definition | Defines the description of a term inside `<dl>`                                         |
| `<table> ... </table>`                | Table                  | Defines a table container                                                               |
| `<caption> ... </caption>`            | Table Caption          | Title/description for a table                                                           |
| `<tr> ... </tr>`                      | Table Row              | Defines a row inside a table                                                            |
| `<th> ... </th>`                      | Table Header           | Defines a header cell (bold, centered by default)                                       |
| `<td> ... </td>`                      | Table Data             | Defines a standard data cell inside a row                                               |
| `<thead> ... </thead>`                | Table Head             | Groups the header rows of a table                                                       |
| `<tbody> ... </tbody>`                | Table Body             | Groups the main body rows of a table                                                    |
| `<tfoot> ... </tfoot>`                | Table Footer           | Groups footer rows of a table (e.g., totals, summary)                                   |

| TAG (non-semantic/auxiliary)          | Meaning                | Function (What it does)                                                                 |
|:--------------------------------------|:-----------------------|:----------------------------------------------------------------------------------------|
| `<br>`                                | Break                  | Inserts a line break (no closing tag)                                                   |
| `<hr>`                                | Horizontal Rule        | Inserts a thematic break (horizontal line) (no closing tag)                             |
| `<div> ... </div>`                    | Division               | Division. Generic block-level container (for grouping, no semantic meaning)             |
| `<span> ... </span>`                  | Span                   | Generic inline container (for styling, no semantic meaning)                             |

# JavaScript
Used to change the DOM, hence change HTML structure nor CSS.

Main methods to interact with DOM:


| Method / Property              | Function (What it does)                                                                          | Example                                          |
|--------------------------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------|
| `getElementById()`             | Get **one element** by its unique `id`.                                                          | `document.getElementById("first-nav-bar")`       |
| `getElementsByTagName()`       | Get **all elements** with a given tag (returns an **HTMLCollection**).                           | `document.getElementsByTagName("ul")[0]`         |
| `getElementsByClassName()`     | Get **all elements** with a given class (returns an **HTMLCollection**).                         | `document.getElementsByClassName("menu-item")[0]`|
| `querySelector()`              | Get **the first element** that matches a **CSS selector**.                                       | `document.querySelector("ul li.active")`         |
| `querySelectorAll()`           | Get **all elements** that match a **CSS selector** (returns a **NodeList**, supports `forEach`). | `document.querySelectorAll(".menu-item")        `|
| `createElement()`              | Create a **new element** in the DOM (not inserted yet).                                          | `let p = document.createElement("p")`            |
| `appendChild()`                | Append a child **at the end** of a parent element.                                               | `ul.appendChild(li)`                             |
| `insertBefore()`               | Insert a new child **before another child** of the same parent.                                  | `parent.insertBefore(p, title)`                  |
| `replaceChild()`               | Replace an existing child with another one.                                                      | `parent.replaceChild(newH1, oldH2)`              |
| `removeChild()`                | Remove a specific child element from a parent.                                                   | `ul.removeChild(li)`                             |
| `textContent`                  | Get or set the **text only** of an element (ignores HTML).                                       | `footer.textContent = "New footer text"`         |
| `innerHTML`                    | Get or set the **HTML content** of an element (parses tags).                                     | `footer.innerHTML = "<b>Bold footer</b>"`        |
| `setAttribute()`               | Add or update an attribute of an element.                                                        | `img.setAttribute("src", "logo.png")`            |
| `getAttribute()`               | Get the value of an attribute.                                                                   | `img.getAttribute("alt")`                        |
| `classList.add()`              | Add a CSS class to an element.                                                                   | `div.classList.add("active")`                    |
| `classList.remove()`           | Remove a CSS class from an element.                                                              | `div.classList.remove("hidden")`                 |
| `classList.toggle()`           | Toggle (add/remove) a CSS class depending on its current state.                                  | `div.classList.toggle("dark-mode")`              |
| `element.style.<cssProperty>`  | Change the **inline style** of an element via JavaScript.                                        | `container.style.backgroundColor = "red"`        |




css_tag* = color, backgroundColor, padding, etc.


We could track events using `document.addEventListener(event, function)`. The events could be: 


| Event              | Category              | What it does                                                                |
|--------------------|-----------------------|-----------------------------------------------------------------------------|
| onclick            | Mouse                 | Fires when the user clicks on an element.                                   |
| ondblclick         | Mouse                 | Fires when the user double-clicks on an element.                            |
| onmousedown        | Mouse                 | Fires when a mouse button is pressed down on an element.                    |
| onmouseup          | Mouse                 | Fires when a mouse button is released over an element.                      |
| onmouseover        | Mouse                 | Fires when the pointer moves over an element.                               |
| onmouseout         | Mouse                 | Fires when the pointer leaves an element.                                   |
| onmousemove        | Mouse                 | Fires when the pointer is moving over an element.                           |
| onmouseenter       | Mouse                 | Fires when the pointer enters an element (does not bubble).                 |
| onmouseleave       | Mouse                 | Fires when the pointer leaves an element (does not bubble).                 |
| oncontextmenu      | Mouse                 | Fires when the right mouse button is clicked (context menu).                |
| onkeydown          | Keyboard              | Fires when a key is pressed down.                                           |
| onkeypress         | Keyboard              | Fires when a key is pressed and held (deprecated in modern browsers).       |
| onkeyup            | Keyboard              | Fires when a key is released.                                               |
| onfocus            | Form & Input          | Fires when an element (like input) gains focus.                             |
| onblur             | Form & Input          | Fires when an element loses focus.                                          |
| onchange           | Form & Input          | Fires when the value of an input, select, or textarea changes.              |
| oninput            | Form & Input          | Fires immediately when the value of an element changes (while typing).      |
| onsubmit           | Form & Input          | Fires when a form is submitted.                                             |
| onreset            | Form & Input          | Fires when a form is reset.                                                 |
| onselect           | Form & Input          | Fires when text inside an input or textarea is selected.                    |
| onload             | Window & Document     | Fires when the page or element has fully loaded.                            |
| onunload           | Window & Document     | Fires when the page is unloading (leaving).                                 |
| onbeforeunload     | Window & Document     | Fires before the page unloads (allows showing a confirmation).              |
| onresize           | Window & Document     | Fires when the browser window is resized.                                   |
| onscroll           | Window & Document     | Fires when the document or an element is being scrolled.                    |
| onerror            | Window & Document     | Fires when an error occurs (e.g., loading image or script fails).           |
| oncopy             | Clipboard             | Fires when content is copied.                                               |
| oncut              | Clipboard             | Fires when content is cut.                                                  |
| onpaste            | Clipboard             | Fires when content is pasted.                                               |
| ondrag             | Drag & Drop           | Fires continuously while an element is being dragged.                       |
| ondragstart        | Drag & Drop           | Fires when the user starts dragging an element.                             |
| ondragend          | Drag & Drop           | Fires when the user finishes dragging an element.                           |
| ondragenter        | Drag & Drop           | Fires when a dragged element enters a valid drop target.                    |
| ondragleave        | Drag & Drop           | Fires when a dragged element leaves a valid drop target.                    |
| ondragover         | Drag & Drop           | Fires when a dragged element is over a valid drop target.                   |
| ondrop             | Drag & Drop           | Fires when a dragged element is dropped on a target.                        |
| onplay             | Media                 | Fires when media starts playing.                                            |
| onpause            | Media                 | Fires when media is paused.                                                 |
| onended            | Media                 | Fires when media has finished playing.                                      |
| ontimeupdate       | Media                 | Fires when media playback position changes (time updates).                  |
| onvolumechange     | Media                 | Fires when the volume of media changes.                                     |
| onloadeddata       | Media                 | Fires when media data is loaded and ready.                                  |
| oncanplay          | Media                 | Fires when the browser can start playing media.                             |
| onwaiting          | Media                 | Fires when media is paused while waiting for more data.                     |
| ontouchstart       | Touch (Mobile)        | Fires when a finger touches the screen.                                     |
| ontouchmove        | Touch (Mobile)        | Fires when a finger moves on the screen.                                    |
| ontouchend         | Touch (Mobile)        | Fires when a finger is lifted from the screen.                              |
| ontouchcancel      | Touch (Mobile)        | Fires when a touch event is interrupted (e.g., alert pops up).              |
| onpointerdown      | Pointer               | Fires when a pointer (mouse, pen, finger) touches an element.               |
| onpointerup        | Pointer               | Fires when a pointer is released.                                           |
| onpointermove      | Pointer               | Fires when a pointer moves.                                                 |
| onpointerenter     | Pointer               | Fires when a pointer enters the element.                                    |
| onpointerleave     | Pointer               | Fires when a pointer leaves the element.                                    |
| onpointerover      | Pointer               | Fires when a pointer is over the element (bubbles).                         |
| onpointerout       | Pointer               | Fires when a pointer leaves the element (bubbles).                          |
| onpointercancel    | Pointer               | Fires when a pointer event is canceled.                                     |
| onanimationstart   | CSS Animation         | Fires when a CSS animation starts.                                          |
| onanimationend     | CSS Animation         | Fires when a CSS animation ends.                                            |
| onanimationiteration | CSS Animation       | Fires when a CSS animation repeats (loop iteration).                        |
| ontransitionend    | CSS Transition        | Fires when a CSS transition has completed.                                  |

