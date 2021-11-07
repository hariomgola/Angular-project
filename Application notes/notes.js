/**
  # Angular - Introduction
   - Framework to Build client side Application
   - Great for SPA where parts of view reload asyncronously.
 # Why learn Angular
   - Modular Approach
   - Re-usable code.
   - Development quicker
   - Unit testable
   - Google + Microsoft
 # Angular History
   - 2010 - Angular JS
   - 2016 - Angular version 2
   Upgrade angular twice a year
 # Pre-requirement 
   - HTML,css and JS
   - TypeScript
 # Development Enviourment
   - Node
   - Npm
   - Angular Cli
   - Text Editor - VScode/Atom
  
 # Creating new Angular project
   - ng new `Project name`

 # Run Application
   - ng serve

 # Angular Architecture
   - Module (lines of code which can be imported or exported) RootModule - App Module
     - Components/Services  RootComponent - AppComponent


                       Html template
                          /
            Components   - 
               /          \
              /         Class(Logic)
  Modules    -
              \ 
               \
            Services  - (Class Contains bussiness logic of the Application)

 # Important file structure
   - Package.json  - Contains the file and dependencies
   - Main.ts  - Entry point of the Application
   - app/app.module.ts - Root module of the application
   - app/app.component.ts - Root component of the application

 # component
                       Html          TypeScript code       Information
                        /              /                     /
   Components   -   Templates   -    Class          -     MetaData(Decorator)
                        \              \                     \
                       CSS           Data & Methods        Angular need this to decide wheather the file is a component or a regular class

 # Create a new component
  - ng g c 'component name'
  - Add new Component in rootmodule

 # Changing decorator (@Component)
                        Type Script                       Html                              Type
   - Selector           'app-test'                   <app-test><app-test>              Use as a html tag
                        '.app-test'                  <div class="app-test"></div>      Use as a class tag
                        '[app-test]'                 <div app-test></div>              Use as a attribute
    
                        Type Script                       Type
   - templateUrl        './test.component.html'          Use as a file
     template           `<div>Inline template</div>`     Use as a inline template or use `` for multiple line html

   -                   Type Script                       Type
     styleUrls          ['./test.component.css']         Use as a file
     styles             [`div{color:red}`]               Use as a inline css also with the help of backticks


  # Interpolation  Ts -> HTML  {{}}
    |>_ Pros
   - Use to communicate data from tsfile to html file or (from logic to view)
   - can also do logic and string concetenation {{2+2}} or {{'Hello '+name}} or {{name.length}} or {{name.toUppercase()}}
   - Also we are able to call predefine method or custome method {{welcomeName()}}
    |>_ Cons
   - Assigment to variable is not possible {{a=2+2}}
   - Access to global variable is not possible {{window.location.href}}

  # Property Binding  HTML -> ts   []
   - $0 in console represents the current element
   - $0.getAttribute('value')  - didn't change - defined by the html                        - Attribut is the initial value
   - $0.value                  -    change     - Defined by the DOM(Document Object model)  - value is the current value

   - Property binding is needed because interpolation only works with string value not with the boolean value that's why we need property binding
   






































































*/
