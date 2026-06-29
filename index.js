// Generated file, do NOT edit

export default [
  {
    name: 'tests-unit/whitespace/whitespace.less',
    input:
      '// Whitespace handling tests\n\n\n.whitespace\n  { color: white; }\n\n.whitespace\n{\n  color: white;\n}\n  .whitespace\n{ color: white; }\n\n.whitespace{color:white;}\n.whitespace { color : white ; }\n\n.white,\n.space,\n.mania\n{ color: white; }\n\n.no-semi-column { color: white }\n.no-semi-column {\n  color: white;\n  white-space: pre\n}\n.no-semi-column {border: 2px solid white}\n.newlines {\n  background: the,\n              great,\n              wall;\n  border: 2px\n          solid\n          black;\n}\n.empty {\n\n}\n.sel\n.newline_ws .tab_ws {\ncolor:\nwhite;\nbackground-position: 45\n-23;\n}\n',
  },
  {
    name: 'tests-unit/variables-in-at-rules/variables-in-at-rules.less',
    input:
      '@Eight: 8;\n@charset "UTF-@{Eight}";\n\n@ns: less;\n@namespace @ns "http://lesscss.org";\n\n@name: enlarger;\n@keyframes @name {\n    from {font-size: 12px;}\n    to   {font-size: 15px;}\n}\n\n.m(reducer);\n.m(@name) {\n    @-webkit-keyframes @name {\n        from {font-size: 13px;}\n        to   {font-size: 10px;}\n    }\n}\n',
  },
  {
    name: 'tests-unit/variables/variable-advanced.less',
    input:
      '// Advanced variable features not covered in existing tests\n@a: 2;\n@c: #888;\n@onePixel: 1px;\n\n.alpha {\n    @var: 42;\n    filter: alpha(opacity=@var);\n}\n\n.units-extended {\n  width: @onePixel;\n  same-unit-as-previously: (@onePixel / @onePixel);\n  square-pixel-divided: (@onePixel * @onePixel / @onePixel);\n  odd-unit: unit((@onePixel * 4em / 2cm));\n  percentage: (10 * 50%);\n  pixels: (50px * 10);\n  conversion-metric-a: (20mm + 1cm);\n  conversion-metric-b: (1cm + 20mm);\n  conversion-imperial: (1in + 72pt + 6pc);\n  custom-unit: (42octocats * 10);\n  custom-unit-cancelling: (8cats * 9dogs / 4cats);\n  mix-units: (1px + 1em);\n  invalid-units: (1px * 1px);\n  .fallback {\n    @px: 14px;\n    @em: 1.4em;\n    @cm: 10cm;\n    div-px-1: (@px / @em);\n    div-px-2: ((@px / @em) / @cm);\n    sub-px-1: (@px - @em);\n    sub-cm-1: (@cm - (@px - @em));\n    mul-px-1: (@px * @em);\n    mul-em-1: (@em * @px);\n    mul-em-2: ((@em * @px) * @cm);\n    mul-cm-1: (@cm * (@em * @px));\n    add-px-1: (@px + @em);\n    add-px-2: ((@px + @em) + @cm);\n    mul-px-2: ((1 * @px) * @cm);\n    mul-px-3: ((@px * 1) * @cm);\n  }\n}\n\n.css-custom-properties {\n\t--tw-pan-x:  ;\n\t--tw-pan-y:  ;\n\t--tw-pinch-zoom:  ;\n\t--tw-scroll-snap-strictness: proximity;\n}\n\n.variable-interpolation {\n  @a1: 1px;\n  @b2: 2px;\n  @c3: @a1 + @b2;\n\n  @radio-cls: radio;\n  @radio-cls-checked: @{radio-cls}_checked;\n\n  .@{radio-cls-checked} {\n    border-color: #fff;\n  }\n}\n\n.each-with-variables {\n  @items:\n  // Fruit\n      apple,\n      banana,\n      cherry,\n  // Vegetables\n      carrot,\n      potato,\n  ;\n\n  each(@items, {\n    div#@{value} {\n      color: blue;\n    }\n  })\n}\n',
  },
  {
    name: 'tests-unit/variables/variables.less',
    input:
      "@a: 2;\n@x: (@a * @a);\n@y: (@x + 1);\n@z: (@x * 2 + @y);\n@var: -1;\n@b: @a * 10;\n@c: #888;\n@fonts: \"Trebuchet MS\", Verdana, sans-serif;\n@f: @fonts;\n@quotes: \"~\" \"~\";\n@q: @quotes;\n@onePixel: 1px;\n\n.variables-basic {\n  width: (@z + 1cm);\n  height: (@b + @x + 0px);\n  color: @c;\n  font-family: @f;\n  quotes: @q;\n}\n\n.variable-dash {\n  @jumbotron-padding: 30px;\n  padding: @jumbotron-padding (@jumbotron-padding/2);\n}\n\n.variable-redefinition {\n  @var: 0;\n  zero: @var;\n}\n\n.variable-scope {\n  @var: 4;\n  @var: 2;\n  three: @var;\n  @var: 3;\n}\n\n.variable-important {\n  @important-var: @c !important;\n  @important-var-two: @a !important;\n  minus-one: @var;\n  @a: 'Trebuchet';\n  @multi: 'A', B, C;\n  font-family: @a, @a, @a;\n  color: @c !important;\n  same-color: @important-var;\n  same-again: @important-var !important;\n  multi-important: @important-var @important-var, @important-var-two;\n  multi: something @multi, @a;\n}\n\n.variable-names-quoted {\n  @var: 'hello';\n  @name: 'var';\n  name: @@name;\n}\n\n.variable-names-unquoted {\n  @var: 'hello';\n  @name: var;\n  name: @@name;\n}\n\n.variable-names-color-keyword {\n  @red: 'hello';\n  @name: red;\n  name: @@name;\n}\n\n.variable-units {\n  width: @onePixel;\n  same-unit-as-previously: (@onePixel / @onePixel);\n  square-pixel-divided: (@onePixel * @onePixel / @onePixel);\n  odd-unit: unit((@onePixel * 4em / 2cm));\n}\n\n.variable-pollution {\n  @a: 'no-pollution';\n  a: @a;\n}\n\n.polluteMixin() {\n  @a: 'pollution';\n}\n\n\n\n// https://github.com/less/less.js/issues/2462\n@type: 5_large;\n.icon-@{type} {\n  background-image: ~\"url(/img/icon/@{type}.svg)\";\n}\n",
  },
  {
    name: 'tests-unit/urls/urls.less',
    input:
      "@import \"nested-gradient-with-svg-gradient/mixin-consumer.less\";\n\n@font-face {\n  src: url(\"/fonts/garamond-pro.ttf\");\n  src: local(Futura-Medium),\n       url(fonts.svg#MyGeometricModern) format(\"svg\");\n  not-a-comment: url(//z);\n}\n#shorthands {\n  background: url(\"http://www.lesscss.org/spec.html\") no-repeat 0 4px;\n  background: url(\"img.jpg\") center / 100px;\n  background: #fff url(image.png) center / 1px 100px repeat-x scroll content-box padding-box;\n}\n#misc {\n  background-image: url(images/image.jpg);\n}\n#data-uri {\n  background: url(data:image/png;charset=utf-8;base64,\n    kiVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/\n    k//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U\n    kg9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC);\n  background-image: url(data:image/x-png,f9difSSFIIGFIFJD1f982FSDKAA9==);\n  background-image: url(http://fonts.googleapis.com/css?family=\\\"Rokkitt\\\":\\(400\\),700);\n  background-image: url(\"http://fonts.googleapis.com/css?family=\\\"Rokkitt\\\":\\(400\\),700\");\n}\n\n#svg-data-uri {\n  background: transparent url('data:image/svg+xml, <svg version=\"1.1\"><g></g></svg>');\n}\n\n.comma-delimited {\n  background: url(bg.jpg) no-repeat, url(bg.png) repeat-x top left, url(bg);\n}\n.values {\n    @a: 'Trebuchet';\n    url: url(@a);\n}\n\n@import \"import/import-and-relative-paths-test\";\n\n#relative-url-import {\n    .unquoted-relative-path-bg();\n    .quoted-relative-path-border-image();\n}\n\n#data-uri {\n  uri: data-uri('image/jpeg;base64', '../../data/image.jpg');\n  @var: replace('../../data/replace.jpg', \"replace\", \"image\");\n  background-image: data-uri(@var), data-uri(replace('../../data/image.filext', \"filext\", \"jpg\"));\n\n  uri-fragment: data-uri('image/jpeg;base64', '../../data/image.jpg#fragment');\n}\n\n#data-uri-guess {\n  uri: data-uri('../../data/image.jpg');\n}\n\n#data-uri-ascii {\n  uri-1: data-uri('text/html', '../../data/page.html');\n  uri-2: data-uri('../../data/page.html');\n}\n\n#file-functions {\n  svg-not-base-64: data-uri('../../data/image.svg');\n  size: image-size('../../data/data-uri-fail.png');\n  width: image-width('../../data/data-uri-fail.png');\n  height: image-height('../../data/data-uri-fail.png');\n}\n.add_an_import(@file_to_import) {\n@import \"@{file_to_import}\";\n}\n\n.add_an_import(\"file.css\");\n\n#svg-functions {\n  background-image: svg-gradient(to bottom, black, white);\n  background-image: svg-gradient(to bottom, black, orange 3%, white);\n  @green_5: green 5%;\n  @orange_percentage: 3%;\n  @orange_color: orange;\n  background-image: svg-gradient(to bottom, (mix(black, white) + #444) 1%, @orange_color @orange_percentage, ((@green_5)), white 95%);\n}\n//it should work also inside @font-face #2035\n@font-face {\n  font-family: 'MyWebFont';\n  src: url(webfont.eot);\n  src+: url('webfont.eot?#iefix');\n  src+_: format('embedded-opentype');\n  src+: url('webfont.woff') format('woff');\n  src+: format('truetype');\n  src+_: url('webfont.ttf');\n  src+: url('webfont.svg#svgFontName') format('svg');\n}\n",
  },
  {
    name: 'tests-unit/urls/nested-gradient-with-svg-gradient/mixin-consumer.less',
    input:
      '@import "svg-gradient-mixin.less";\n\n.gray-gradient {\n  .gradient-mixin(#999);\n}\n',
  },
  {
    name: 'tests-unit/urls/nested-gradient-with-svg-gradient/svg-gradient-mixin.less',
    input:
      '.gradient-mixin(@color) {\n  background: svg-gradient(to bottom,\n    fade(@color, 0%) 0%,\n    fade(@color, 5%) 60%,\n    fade(@color, 10%) 70%,\n    fade(@color, 15%) 73%,\n    fade(@color, 20%) 75%,\n    fade(@color, 25%) 80%,\n    fade(@color, 30%) 85%,\n    fade(@color, 35%) 88%,\n    fade(@color, 40%) 90%,\n    fade(@color, 45%) 95%,\n    fade(@color, 50%) 100%\n  );\n}\n',
  },
  {
    name: 'tests-unit/urls/import/import-and-relative-paths-test.less',
    input:
      '@import "../css/background.css";\n@import "import-test-d.css";\n\n@import "imports/logo";\n@import "imports/font";\n\n.unquoted-relative-path-bg() {\n    background-image: url(../../../data/image.jpg);\n}\n.quoted-relative-path-border-image() {\n    border-image: url(\'../../../data/image.jpg\');\n}\n\n#imported-relative-path {\n    .unquoted-relative-path-bg();\n    .quoted-relative-path-border-image();\n}\n',
  },
  {
    name: 'tests-unit/urls/import/imports/font.less',
    input:
      "@font-face {\n    font-family: xecret;\n    src: url('../assets/xecret.ttf');\n}\n\n#secret {\n    font-family: xecret, sans-serif;\n}\n",
  },
  {
    name: 'tests-unit/urls/import/imports/logo.less',
    input:
      '#logo {\n  width: 100px;\n  height: 100px;\n  background: url(\'../assets/logo.png\');\n  background: url("#inline-svg");\n}\n',
  },
  {
    name: 'tests-unit/urls/assets/nested-gradient-with-svg-gradient/mixin-consumer.less',
    input: '.mixin-consumer {\n  color: violet;\n}\n\n',
  },
  {
    name: 'tests-unit/urls/assets/nested-gradient-with-svg-gradient/svg-gradient-mixin.less',
    input:
      '.gradient-mixin(@color) {\n  background: svg-gradient(to bottom,\n    fade(@color, 0%) 0%,\n    fade(@color, 5%) 60%,\n    fade(@color, 10%) 70%,\n    fade(@color, 15%) 73%,\n    fade(@color, 20%) 75%,\n    fade(@color, 25%) 80%,\n    fade(@color, 30%) 85%,\n    fade(@color, 35%) 88%,\n    fade(@color, 40%) 90%,\n    fade(@color, 45%) 95%,\n    fade(@color, 50%) 100%\n  );\n}\n',
  },
  {
    name: 'tests-unit/tailwind/tailwind.less',
    input: '.box {\n  @apply h-64 w-64;\n}\n',
  },
  {
    name: 'tests-unit/strings/strings.less',
    input:
      '// String handling and interpolation tests\n#strings {\n  background-image: url("http://son-of-a-banana.com");\n  quotes: "~" "~";\n  content: "#*%:&^,)!.(~*})";\n  empty: "";\n  brackets: "{" "}";\n  escapes: "\\"hello\\" \\\\world";\n  escapes2: "\\"llo";\n}\n#comments {\n  content: "/* hello */ // not-so-secret";\n}\n#single-quote {\n  quotes: "\'" "\'";\n  content: \'""#!&""\';\n  empty: \'\';\n  semi-colon: \';\';\n}\n#one-line { image: url(http://tooks.com) }\n#crazy { image: url(http://), "}", url("http://}") }\n#interpolation {\n  @var: \'/dev\';\n  url: "http://lesscss.org@{var}/image.jpg";\n\n  @var2: 256;\n  url2: "http://lesscss.org/image-@{var2}.jpg";\n\n  @var3: #456;\n  url3: "http://lesscss.org@{var3}";\n\n  @var4: hello;\n  url4: "http://lesscss.org/@{var4}";\n\n  @var5: 54.4px;\n  url5: "http://lesscss.org/@{var5}";\n}\n\n// multiple calls with string interpolation\n\n.mix-mul (@a: green) {\n    color: ~"@{a}";\n}\n.mix-mul-class {\n    .mix-mul(blue);\n    .mix-mul(red);\n    .mix-mul(black);\n    .mix-mul(orange);\n}\n\n@test: Arial, Verdana, San-Serif;\n.watermark {\n  @family: ~"Univers, @{test}";\n  family: @family;\n}\n#iterated-interpolation {\n  @box-small: 10px;\n  @box-large: 100px;\n\n  .mixin { // both ruleset and mixin\n    width: ~"@{box-@{suffix}}";\n    weird: ~"@{box}-@{suffix}}";\n    width-str: "@{box-@{suffix}}";\n    weird-str: "@{box}-@{suffix}}";\n    @box: ~"@{box";\n    @suffix: large;\n  }\n  .interpolation-mixin {\n    .mixin(); //call the above as mixin\n  }\n}\n',
  },
  {
    name: 'tests-unit/starting-style/starting-style.less',
    input:
      '#nav {\n    transition: background-color 3.5s;\n    background-color: gray;\n}\n\n[popover]:popover-open {\n    opacity: 1;\n    transform: scaleX(1);\n\n    @starting-style {\n        opacity: 0;\n        transform: scaleX(0);\n    }\n}\n\n#target {\n    transition: background-color 1.5s;\n    background-color: green;\n}\n\n@starting-style {\n    #target {\n        background-color: transparent;\n    }\n}\n\n#source {\n    transition: background-color 2.5s;\n    background-color: red;\n}\n\nsource:first {\n    opacity: 1;\n    transform: scaleX(1);\n\n    @starting-style {\n        opacity: 0;\n        transform: scaleX(0);\n    }\n}\n\n#footer {\n    color: yellow;\n}\n\n@starting-style {\n    #footer {\n        background-color: transparent;\n    }\n}\n\nnav > [popover]:popover-open {\n  opacity: 1;\n  transform: scaleX(1);\n\n  @starting-style {\n    padding+_: 10px;\n    padding+_: 8px;\n    padding+_: 6px;\n    padding+_: 4px;\n  }\n}\n\naside > [popover]:popover-open {\n  opacity: 1;\n  transform: scaleX(1);\n\n  @starting-style {\n    // vector math\n    each(1 2 3 4, {\n        padding+_: (@value * 10px);\n    });\n  }\n}\n\n\n',
  },
  {
    name: 'tests-unit/selectors/selectors.less',
    input:
      '// Selector handling tests\nh1, h2, h3 {\n  a, p {\n    &:hover {\n      color: red;\n    }\n  }\n}\n\n#all { color: blue; }\n#the { color: blue; }\n#same { color: blue; }\n\nul, li, div, q, blockquote, textarea {\n  margin: 0;\n}\n\ntd {\n  margin: 0;\n  padding: 0;\n}\n\ntd, input {\n  line-height: 1em;\n}\n\na {\n  color: red;\n\n  &:hover { color: blue; }\n\n  div & { color: green; }\n\n  p & span { color: yellow; }\n}\n\n.foo {\n  .bar, .baz {\n    & .qux {\n      display: block;\n    }\n    .qux & {\n      display: inline;\n    }\n    .qux& {\n      display: inline-block;\n    }\n    .qux & .biz {\n      display: none;\n    }\n  }\n}\n\n.b {\n &.c {\n  .a& {\n   color: red;\n  }\n }\n}\n\n.b {\n .c & {\n  &.a {\n   color: red;\n  }\n }\n}\n\n.p {\n  .foo &.bar {\n    color: red;\n  }\n}\n\n.p {\n  .foo&.bar {\n    color: red;\n  }\n}\n\n.foo {\n  .foo + & {\n    background: amber;\n  }\n  & + & {\n    background: amber;\n  }\n}\n\n.foo, .bar {\n  & + & {\n    background: amber;\n  }\n}\n\n.foo, .bar {\n  a, b {\n    & > & {\n      background: amber;\n    }\n  }\n}\n\n.other ::fnord { color: red }\n.other::fnord { color: red }\n.other {\n  ::bnord {color: red }\n  &::bnord {color: red }\n}\n\n// selector interpolation\n@theme: blood;\n@selector: ~".@{theme}";\n@{selector} {\n  color:red;\n}\n@{selector}red {\n  color: green;\n}\n.red {\n  #@{theme}.@{theme}&.black:@{theme} {\n    color:black;\n  }\n}\n@num: 3;\n:nth-child(@{num}) {\n  selector: interpolated;\n}\n.test-rule {\n  &:nth-child(@{num}) {\n    selector: interpolated;\n  }\n  &:nth-child(odd):not(:nth-child(3)) {\n    color: #ff0000;\n  }\n}\n@prop: p;\n[prop],\n[prop=ten-percent],\n[prop|="value@{num}"],\n[prop*="val@{num}"],\n[|prop~="val@{num}"],\n[*|prop$="val@{num}"],\n[ns|prop^="val@{num}"],\n[@{prop}^="val@{num}"],\n[@{prop}] {\n  attributes: yes;\n}\n\n/**\n * https://www.w3.org/TR/selectors-4/#attribute-case\n */\n@pattern: less;\na[href*="insensitive" i] {\n  color: cyan;\n}\na[href*="cAsE" s] {\n  color: pink;\n}\na[href*="@{pattern}" I] {\n  background-color: silver;\n}\na[href*="@{pattern}" S] {\n  background-color: red;\n}\n\n/*\nLarge comment means chunk will be emitted after } which means chunk will begin with whitespace...\nblank blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank\nblank blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank\nblank blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank\nblank blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank\nblank blank blank blank blank blank blank blank blank blank blank blank blank blank blank blank\n*/\n@{selector} {\n  color: red;\n}\n.only-nested {\n  .level2 {\n    .foo:not(.tst&:hover) {\n      test: only-nested;\n    }\n  }\n}\n.nestend-and-non-nested {\n  .foo&:not(.tst&:hover) {\n    test: nestend-and-non-nested;\n  }\n}\n.selector:not(&:hover) {\n  test: global scope;\n}\n// https://github.com/less/less.js/issues/2206\n.extend-this {\n  content: \'\\2661\';\n}\n.first-level {\n  .second-level {\n    .active&:extend(.extend-this) { }\n    &.active2:extend(.extend-this) { }\n  }\n}\n\n// https://github.com/less/less.js/issues/4358\n.x {\n    &:is(&.a) { color: red; }\n    &:not(&.b, &.c) { color: green; }\n    &:is(&.d, &.e, &.f) { color: blue; }\n}\n\na:is(.b, :is(.c)) {\n  color: blue;\n}\n\na:is(.b, :is(.c), :has(div)) {\n  color: red;\n}\n\n// https://github.com/less/less.js/issues/4378\n:is(:not(:has(>.foo)), :has(>.foo.bar)) {\n  overflow: clip;\n}\n\n:matches(:not(:has(>.foo)), :has(>.foo.bar)) {\n  overflow: clip;\n}\n\n:where(:not(:has(>.foo)), :has(>.foo.bar)) {\n  overflow: clip;\n}\n\n:is(:has(>.foo + .bar), :has(>.baz ~ .qux), :not(:has(.quux))) {\n  color: blue;\n}\n\n:where(.a, .b, .c) {\n  color: red;\n}\n\n:not(.a, .b, .c) {\n  color: green;\n}\n\n:where(:is(.a, .b), :has(>.c)) {\n  color: blue;\n}\n\n:is(:where(:has(.foo)), :not(:has(.bar))) {\n  color: purple;\n}\n',
  },
  {
    name: 'tests-unit/scope/scope.less',
    input:
      "@x: red;\n@x: blue;\n@z: transparent;\n@mix: none;\n\n.mixin {\n  @mix: #989;\n}\n@mix: blue;\n.tiny-scope {\n  color: @mix; // #989\n  .mixin();\n}\n\n.scope1 {\n  @y: orange;\n  @z: black;\n  color: @x; // blue\n  border-color: @z; // black\n  .hidden {\n    @x: #131313;\n  }\n  .scope2 {\n    @y: red;\n    color: @x; // blue\n    .scope3 {\n      @local: white;\n      color: @y; // red\n      border-color: @z; // black\n      background-color: @local; // white\n    }\n  }\n}\n\n#namespace {\n  .scoped_mixin() {\n    @local-will-be-made-global: green;\n    .scope {\n      scoped-val: @local-will-be-made-global;\n    }\n  }\n}\n\n#namespace > .scoped_mixin();\n\n.setHeight(@h) { @height: 1024px; }\n.useHeightInMixinCall(@h) { .useHeightInMixinCall { mixin-height: @h; } }\n@mainHeight: 50%;\n.setHeight(@mainHeight);\n.heightIsSet { height: @height; }\n.useHeightInMixinCall(@height);\n\n.importRuleset() {\n  .imported {\n    exists: true;\n  }\n}\n.importRuleset();\n.testImported {\n  .imported();\n}\n\n@parameterDefault: 'top level';\n@anotherVariable: 'top level';\n//mixin uses top-level variables\n.mixinNoParam(@parameter: @parameterDefault) when (@parameter = 'top level') {\n  default: @parameter;\n  scope: @anotherVariable;\n  sub-scope-only: @subScopeOnly;\n}\n\n#allAreUsedHere {\n  //redefine top-level variables in different scope\n  @parameterDefault: 'inside';\n  @anotherVariable: 'inside';\n  @subScopeOnly: 'inside';\n  //use the mixin\n  .mixinNoParam();\n}\n#parentSelectorScope {\n  @col: white;\n  & {\n    @col: black;\n  }\n  prop: @col;\n  & {\n    @col: black;\n  }\n}\n.test-empty-mixin() {\n}\n#parentSelectorScopeMixins {\n  & {\n    .test-empty-mixin() {\n      should: never seee 1;\n    }\n  }\n  .test-empty-mixin();\n  & {\n    .test-empty-mixin() {\n      should: never seee 2;\n    }\n  }\n}\n",
  },
  {
    name: 'tests-unit/rulesets/rulesets.less',
    input:
      '// Ruleset nesting and selector tests\n#first > .one {\n  > #second .two > #deux {\n    width: 50%;\n    #third {\n      &:focus {\n        color: black;\n        #fifth {\n          > #sixth {\n            .seventh #eighth {\n              + #ninth {\n                color: purple;\n              }\n            }\n          }\n        }\n      }\n      height: 100%;\n    }\n    #fourth, #five, #six {\n      color: #110000;\n      .seven, .eight > #nine {\n        border: 1px solid black;\n      }\n      #ten {\n        color: red;\n      }\n    }\n  }\n  font-size: 2em;\n  hasOwnProperty: blue;\n}\n',
  },
  {
    name: 'tests-unit/property-targeted/property-targeted.less',
    input:
      "// Targeted tests for specific uncovered lines in property.js\n\n// Lines 49-51: Property with important flag handling\n// This tests when a property accessor accesses a property that has !important\n.test-important {\n  color: red !important;\n  background: $color;\n}\n\n// Lines 60-64: Property undefined error (should be in tests-error, but testing the path)\n// This will error, but tests the error path\n.test-undefined {\n  // value: @undefined-property;\n}\n\n// Lines 72-73: find method returning null (property not found in any frame)\n// This tests the find method when property doesn't exist\n.test-not-found {\n  // value: @nonexistent;\n}\n\n",
  },
  {
    name: 'tests-unit/property-name-interp/property-name-interp.less',
    input:
      "// Property name interpolation tests\npi-test {\n    @prefix: ufo-;\n    @a:    border;\n    @bb:      top;\n    @c_c:    left;\n    @d-d4: radius;\n    @-:         -;\n\n    @var: ~'@not-variable';\n\n    @{a}: 0;\n    @{var}: @var;\n    @{prefix}width: 50%;\n    *-z-@{a} :1px dashed blue;\n    -www-@{a}-@{bb}: 2px;\n    @{d-d4}-is-not-a-@{a}:true;\n    @{a}-@{bb}-@{c_c}-@{d-d4}       : 2em;\n    @{a}@{-}@{bb}@{-}red@{-}@{d-d4}-: 3pt;\n\n    .mixin(mixer);\n    .merge(ish, base);\n}\n\n@global: global;\n\n.mixin(@arg) {\n    @local: local;\n    @{global}-@{local}-@{arg}-property: strong;\n}\n\n.merge(@p, @v) {\n    &-merge {\n        @prefix: pre;\n        @suffix: ish;\n        @{prefix}-property-ish+       :high;\n        pre-property-@{suffix}    +: middle;\n        @{prefix}-property-@{suffix}+:  low;\n        @{prefix}-property-@{p}   +  :   @v;\n\n        @subterfuge: ~'+';\n        pre-property-ish@{subterfuge}: nice try dude;\n    }\n}\n\npi-indirect-vars {\n    @{p}: @p;\n    @p: @@a;\n    @a: b;\n    @b: auto;\n}\n\npi-complex-values {\n    @{p}@{p}: none;\n    @p: (1 + 2px) fadeout(#ff0, 50%), pi() /* foo */;\n}\n",
  },
  {
    name: 'tests-unit/property-accessors/property-accessors.less',
    input:
      '.block_1 {\n  color: red;\n  background-color: $color;\n  @width: 50px;\n  width: @width;\n  height: ($width / 2);\n  @color: red;\n  border: 1px solid lighten($color, 10%);\n  &:hover {\n    color: $color;\n    background-color: $color;\n    .mixin1();\n  }\n  .one {\n    background: $color;\n  }\n  content: "${color}";\n  prop: $color;\n\n}\n\n.block_2 {\n  color: red; \n  .two {\n    background-color: $color; \n  }\n  color: blue;  \n}\n\n.block_3 {\n  color: red; \n  .three {\n    background-color: $color;\n  }\n  .mixin2();\n  color: blue;\n}\n.block_4 {\n  color: red; \n  .four {\n    background-color: $color;\n  }\n  color: blue;\n  .mixin2();\n}\n// property merging\na {\n    background-color+: red;\n    background-color+: foo;\n\n    &b {\n        background: $background-color;\n    }\n}\n\n.value_as_property {\n  prop1: color;\n  ${prop1}: #FF0000;  // not sure why you\'d want to do this, but ok\n}\n\n.mixin1() {\n  color: green;\n}\n.mixin2() { \n  color: yellow;\n}\n\n\n',
  },
  {
    name: 'tests-unit/plugin-preeval/plugin-preeval.less',
    input:
      '@plugin "../../plugin/plugin-preeval";\n\n.two(@rules: {}) {\n    :root.two & {\n        @rules();\n    }\n}\n\n.one {\n    .two({\n        --foo: @replace !important;\n    });\n}\n\n@stop: end;\n',
  },
  {
    name: 'tests-unit/plugin-module/plugin-module.less',
    input:
      '// Test NPM import\n@plugin "clean-css";\n\na {\n  background: none;\n}\n',
  },
  {
    name: 'tests-unit/plugin/plugin.less',
    input:
      '// importing plugin globally\n@plugin "../../plugin/plugin-global";\n\n// transitively include plugins from importing another sheet\n@import "../../plugin/plugin-transitive";\n\n\n// `test-global` function should be reachable\n// `test-local`  function should not be reachable\n// `test-shadow` function should return global version\n.class {\n  trans  : test-transitive();\n  global : test-global();\n  local  : test-local();\n  shadow : test-shadow();\n\n  // `test-global` function should propagate and be reachable\n  // `test-local`  function should be reachable\n  // `test-shadow` function should return local version, shadowing global version\n  .local {\n    @plugin (option) "../../plugin/plugin-local";\n    global : test-global();\n    local  : test-local();\n    shadow : test-shadow();\n  }\n}\n\n// calling a mixin or detached ruleset should not bubble local plugins\n// imported inside either into the parent scope.\n.mixin() {\n  @plugin "../../plugin/plugin-local";\n  mixin-local  : test-local();\n  mixin-global : test-global();\n  mixin-shadow : test-shadow();\n}\n@ruleset : {\n  @plugin "../../plugin/plugin-local";\n  ruleset-local  : test-local();\n  ruleset-global : test-global();\n  ruleset-shadow : test-shadow();\n};\n#ns {\n  @plugin (test=test) "../../plugin/plugin-local";\n  .mixin() {\n    ns-mixin-global : test-global();\n    ns-mixin-local  : test-local();\n    ns-mixin-shadow : test-shadow();\n  }\n}\n.class {\n  #ns > .mixin();\n  .mixin();\n  @ruleset();\n  class-local : test-local();\n}\n\n\n// `test-global` function should propagate into directive scope\n@media screen {\n  .test-rule {\n    result : test-global();\n  }\n}\n@font-face {\n  result : test-global();\n}\n\n// `test-global` function should propagate into nested directive scopes\n@media screen and (min-width:100px) {\n  @media (max-width:400px) {\n\t\t.test-rule {\n\t\t\tresult : test-global();\n\t\t}\n\t}\n}\n\n.test-rule {\n  @media screen {\n    @plugin "../../plugin/plugin-local";\n    result : test-local();\n  }\n}\n\n@plugin "../../plugin/plugin-tree-nodes";\n@ruleset2: test-detached-ruleset();\n.root {\n  @ruleset2();\n}\n.test-rule-empty {\n  val1: foo;\n  test-collapse();\n  val2: foo;\n}\n.test-rule-simple {\n  @plugin "../../plugin/plugin-simple";\n  value: pi-anon();\n  value: (pi() * 2);\n}\n.test-rule-conflicts {\n  @plugin "../../plugin/plugin-scope1";\n  value: foo();\n}\n.test-rule-conflicts {\n  @plugin "../../plugin/plugin-scope2";\n  value: foo();\n}\n.test-rule-conflicts {\n  @plugin "../../plugin/plugin-scope1";\n  value: foo();\n}\n.test-rule-collection {\n  @plugin "../../plugin/plugin-collection";\n  @var: 32;\n  store(@var);\n  store(5);\n  store("bird");\n  list: list();\n}\n\ntest-atrule("@charset"; \'"utf-8"\');\ntest-atrule("@arbitrary"; "value after ()");\n\n// no minVersion specified\n@plugin (option1) "../../plugin/plugin-set-options";\n@plugin "../../plugin/plugin-set-options";\n@plugin (option2) "../../plugin/plugin-set-options";\n@plugin "../../plugin/plugin-set-options";\n@plugin (option3) "../../plugin/plugin-set-options";\n\n// specifies minVersion: [2,0,0]\n@plugin (option1) "../../plugin/plugin-set-options-v2";\n@plugin "../../plugin/plugin-set-options-v2";\n@plugin (option2) "../../plugin/plugin-set-options-v2";\n@plugin "../../plugin/plugin-set-options-v2";\n@plugin (option3) "../../plugin/plugin-set-options-v2";\n\n// specifies minVersion: [3,0,0]\n@plugin (option1) "../../plugin/plugin-set-options-v3";\n@plugin "../../plugin/plugin-set-options-v3";\n@plugin (option2) "../../plugin/plugin-set-options-v3";\n@plugin "../../plugin/plugin-set-options-v3";\n@plugin (option3) "../../plugin/plugin-set-options-v3";\n\n',
  },
  {
    name: 'tests-unit/plugi/plugi.less',
    input:
      '// https://github.com/less/less.js/issues/3660\n// const dir = parserInput.$re(/^@plugin?\\s+/);\n// correct regexp is /^@plugin\\s+/\n// so follow code will change nothing, parse result is same with raw less code\n@plugi "plugi-typo-dont-parse-as-@plugin";\n',
  },
  {
    name: 'tests-unit/permissive-parse/permissive-parse.less',
    input:
      '@function-name: regexp;\n@d-value: 15;\n@-moz-document @function-name("(\\d{0,@{d-value}})") {\n\ta {\n\t\tcolor: red;\n\t}\n}\n\n.custom-property {\n  --this: () => {\n    basically anything until final semi-colon;\n    even other stuff; // i\\\'m serious;\n  };\n  @this: () => {\n    basically anything until final semi-colon;\n    even other stuff; // i\\\'m serious;\n  };\n  --that: @this;\n  @red: lighten(red, 10%);\n  --custom-color: @red lighten(red, 10%);\n  custom-color: $--custom-color;\n}\n\n@iostat: 1;\n.var {\n  --fortran: read (*, *, iostat=@iostat) radius, height;\n}\n\n@boom-boom: bam;\n@-moz-whatever (foo: "(" @boom-boom ")") {\n  bar: foo;\n}\n\n@selectorList: #selector, .bar, foo[attr="blah"];\n@{selectorList} {\n  bar: value;\n}\n\n@size: 640px;\n@tablet: (min-width: @size);\n@media @tablet {\n  .holy-crap {\n    this: works;\n  }\n}\n@tablet: (min-width: @{size});\n@media @tablet {\n  .with-curly {\n    this: works;\n  }\n}\n// @todo - fix comment absorption after property\n.test-rule-comment {\n  --value: a/* { ; } */;\n  --comment-within: ( /* okay?; comment; */ );\n}\n.test-no-trailing-semicolon {\n  --value: foo\n}\n.test-no-trailing-semicolon2 {--value: foo}\n.test-no-trailing-semicolon3 { --value: foo }\n\n\n',
  },
  {
    name: 'tests-unit/parser-slashed-combinator/parser-slashed-combinator.less',
    input:
      '// Test for slashedCombinator parser (lines 1392-1399)\n// This tests /deep/ and /shadow/ combinators\n// NOTE: These combinators are DEPRECATED in CSS and should not be used in new code\n// They were part of the Shadow DOM specification but have been removed\n\n// /deep/ combinator (deprecated)\n.parent /deep/ .child {\n  color: red;\n}\n\n// /shadow/ combinator (deprecated)\n.container /shadow/ .content {\n  background: blue;\n}\n\n// Test with nested selectors\n.wrapper /deep/ .inner /deep/ .deepest {\n  padding: 10px;\n}\n\n',
  },
  {
    name: 'tests-unit/parser-property-interp/parser-property-interp.less',
    input:
      '// Test for ruleProperty parser with ${prop} interpolation (line 2640)\n// This tests complex property names using ${property} interpolation in property NAMES\n// ${prop} uses the VALUE of a plain property (not a variable) as the property name\n// Note: This is different from @{var} which uses variables\n\n.test {\n  // Define properties - their VALUES will be used as property names\n  prop-name: color;\n  my: background;\n  value: width;\n  \n  // Simple ${prop} interpolation in property name (ruleProperty parser line 2640)\n  // ${prop-name} uses the value of prop-name ("color") as the property name\n  // This triggers the branch at line 2640: new(tree.Property)(`$${s.slice(2, -1)}`, ...)\n  ${prop-name}: red;\n  \n  // Multiple interpolations with literal parts\n  // border-${prop-name} becomes "border-color" (since prop-name\'s value is "color")\n  border-${prop-name}-width: 2px;\n  \n  // Complex property name with ${prop}\n  *-z-${prop-name}: 1px dashed blue;\n  \n  // Multiple ${prop} in same property name\n  // ${my}-${prop-name}-${value} becomes "background-color-width"\n  ${my}-${prop-name}-${value}: green;\n}\n\n',
  },
  {
    name: 'tests-unit/parse-interpolation/parse-interpolation.less',
    input:
      "// Parse interpolation tests\n@inputs: input[type=text], input[type=email], input[type=password], textarea;\n\n@{inputs} {\n  &:focus {\n    foo: bar;\n  }\n} \n\n@classes: .a, .b, .c;\n\n@{classes} {  \n  + .z {\n    color: blue; \n  }\n}\n\n.bar {\n  .d@{classes}&:hover, baz {\n    color: blue;\n  }\n}\n\n@c: ~'.a, .b';\n@d: ~'.c, .d';\n@e: ~' + .e';\n\n@{c}@{d} {\n  @{e} {\n    foo: bar;\n  }\n}\n\n@textClasses: ~'&[class=\"text\"], &.text';\n\ninput {\n  @{textClasses} {\n    background: red;\n  }\n}\n\n@my-selector: ~'.selector-1, .selector-2';\n.master-page-1 {\n    @{my-selector} {\n        background-color: red;\n    }\n}\n\n@list: apple, satsuma, banana, pear;\n@{list} {\n  .fruit-& {\n    content: \"Just a test.\";\n  }\n}\n",
  },
  {
    name: 'tests-unit/operations/operations-advanced.less',
    input:
      '// Advanced operation tests to cover edge cases\n\n// Operations with math off\n@math-off: true;\n.test-math-off {\n  @a: 10px;\n  @b: 5px;\n  result: @a + @b;\n}\n\n// Operations with Dimension to Color conversion\n@dimension: 10px;\n@color: #ff0000;\n.test-dim-to-color {\n  // This should convert dimension to color for operation\n  result: @dimension + @color;\n}\n\n// Operations with Color to Dimension conversion\n.test-color-to-dim {\n  result: @color + @dimension;\n}\n\n// Operations with division and PARENS_DIVISION math mode\n@div-op: (10px / 2);\n.test-division {\n  result: @div-op * 2;\n}\n\n// Operations with nested operations\n@nested: (10px + 5px) * 2;\n.test-nested {\n  result: @nested;\n}\n\n// Operations with spaced operators\n@spaced: 10px + 5px;\n.test-spaced {\n  result: @spaced;\n}\n\n// Operations with non-spaced operators\n@non-spaced: 10px+5px;\n.test-non-spaced {\n  result: @non-spaced;\n}\n\n// Operations with division operator\n@div-op: 10px / 2;\n.test-div {\n  result: @div-op;\n}\n\n// Operations with invalid types (should error, but test the path)\n.test-invalid {\n  // This will error, but tests the error path\n  // result: "string" + 10px;\n}\n\n// Operations with Operation operands\n@op1: 10px + 5px;\n@op2: 20px - 10px;\n.test-op-operands {\n  result: @op1 * @op2;\n}\n\n// Operations with math context\n.test-math-context {\n  @a: 10;\n  @b: 5;\n  add: @a + @b;\n  sub: @a - @b;\n  mul: @a * @b;\n  div: @a / @b;\n}\n\n',
  },
  {
    name: 'tests-unit/operations/operations.less',
    input:
      '// Mathematical operations tests\n#operations {\n  color: (#110000 + #000011 + #001100); // #111111\n  color-2: (yellow - #070707);\n  height: (10px / 2px + 6px - 1px * 2); // 9px\n  width: (2 * 4 - 5em); // 3em\n  .spacing {\n    height: (10px / 2px+6px-1px*2);\n    width: (2  * 4-5em);\n  }\n  subtraction: (20 - 10 - 5 - 5); // 0\n  division: (20 / 5 / 4); // 1\n}\n\n@x: 4;\n@y: 12em;\n\n.with-variables {\n  height: (@x + @y); // 16em\n  width: (12 + @y); // 24em\n  size: (5cm - @x); // 1cm\n}\n\n.with-functions {\n  color: (rgb(200, 200, 200) / 2);\n  color: (2 * hsl(0, 50%, 50%));\n  color: (rgb(10, 10, 10) + hsl(0, 50%, 50%));\n}\n\n@z: -2;\n\n.negative {\n  height: (2px + @z); // 0px\n  width: (2px - @z); // 4px\n}\n\n.shorthands {\n  padding: -1px 2px 0 -4px; //\n}\n\n.rem-dimensions {\n  font-size: (20rem / 5 + 1.5rem); // 5.5rem\n}\n\n.colors {\n  color: #123; // #112233\n  border-color: (#234 + #111111); // #334455\n  background-color: (#222222 - #fff); // #000000\n  .other {\n    color: (2 * #111); // #222222\n    border-color: (#333333 / 3 + #111); // #222222\n  }\n}\n\n.negations {\n    @var: 4px;\n    variable: (-@var); // 4\n    variable1: (-@var + @var); // 0\n    variable2: (@var + -@var); // 0\n    variable3: (@var - -@var); // 8\n    variable4: (-@var - -@var); // 0\n    paren: (-(@var)); // -4px\n    paren2: (-(2 + 2) * -@var); // 16\n}\n',
  },
  {
    name: 'tests-unit/no-output/no-output.less',
    input: '.mixin() {\n}\n',
  },
  {
    name: 'tests-unit/nesting/nesting.less',
    input:
      '.nesting-parent {\n  color: red;\n  \n  .nesting-child {\n    color: blue;\n    \n    .nesting-grandchild {\n      color: green;\n    }\n  }\n  \n  &:hover {\n    color: orange;\n  }\n  \n  &.modifier {\n    color: purple;\n  }\n}\n\n.correctly-exit-calc-mode {\n    @a: 10;\n    h2 { width: unit(@a, px); }\n\n    div { width: calc(100px * 2); }\n\n    .mk-map() {\n        text: white;\n        background: black;\n    }\n\n    @p: .mk-map();\n\n    h1 { color: @p[text]; }\n}\n\n\n',
  },
  {
    name: 'tests-unit/namespace-targeted/namespace-targeted.less',
    input:
      "// Targeted tests for specific uncovered lines in namespace-value.js\n\n// Lines 51-52: $@var interpolation (property interpolation with variable)\n// This tests: name.substring(0, 2) === '$@'\n// The syntax is #namespace[$@var-name] where @var-name contains the property name\n@prop-name: my-prop;\n#namespace {\n  my-prop: prop-value;\n}\n.test-prop-interp {\n  value: #namespace[$@prop-name];\n}\n\n// Lines 43-47: Variable not found error path\n// Access a variable that doesn't exist in the namespace\n#namespace-with-var {\n  @existing-var: value;\n}\n.test-var-not-found {\n  // This will error: variable @nonexistent-var not found\n  // color: #namespace-with-var[@nonexistent-var];\n}\n\n// Lines 61-65: Property not found error path\n// Access a property that doesn't exist in the namespace\n#namespace-with-prop {\n  existing-prop: value;\n}\n.test-prop-not-found {\n  // This will error: property \"nonexistent-prop\" not found\n  // value: #namespace-with-prop[$nonexistent-prop];\n}\n\n",
  },
  {
    name: 'tests-unit/mixins-pattern/mixins-pattern.less',
    input:
      ".mixin (...) {\n  variadic: true;\n}\n.mixin (@a...) {\n  named-variadic: true;\n}\n.mixin () {\n    zero: 0;\n}\n.mixin (@a: 1px) {\n    one: 1;\n}\n.mixin (@a) {\n    one-req: 1;\n}\n.mixin (@a: 1px, @b: 2px) {\n    two: 2;\n}\n\n.mixin (@a, @b, @c) {\n    three-req: 3;\n}\n\n.mixin (@a: 1px, @b: 2px, @c: 3px) {\n    three: 3;\n}\n\n.zero {\n    .mixin();\n}\n\n.one {\n    .mixin(1);\n}\n\n.two {\n    .mixin(1, 2);\n}\n\n.three {\n    .mixin(1, 2, 3);\n}\n\n//\n\n.mixout ('left') {\n    left: 1;\n}\n\n.mixout ('right') {\n    right: 1;\n}\n\n.left {\n    .mixout('left');\n}\n.right {\n    .mixout('right');\n}\n\n//\n\n.border (@side, @width) {\n    color: black;\n    .border-side(@side, @width);\n}\n.border-side (left, @w) {\n    border-left: @w;\n}\n.border-side (right, @w) {\n    border-right: @w;\n}\n\n.border-right {\n    .border(right, 4px);\n}\n.border-left {\n    .border(left, 4px);\n}\n\n//\n\n\n.border-radius (@r) {\n    both: (@r * 10);\n}\n.border-radius (@r, left) {\n    left: @r;\n}\n.border-radius (@r, right) {\n    right: @r;\n}\n\n.only-right {\n    .border-radius(33, right);\n}\n.only-left {\n    .border-radius(33, left);\n}\n.left-right {\n    .border-radius(33);\n}\n",
  },
  {
    name: 'tests-unit/mixins-nested/mixins-nested.less',
    input:
      '.mix-inner (@var) {\n  border-width: @var;\n}\n\n.mix (@a: 10) {\n  .inner {\n    height: (@a * 10);\n\n    .innest {\n      width: @a;\n      .mix-inner((@a * 2));\n    }\n  }\n}\n\n.class {\n  .mix(30);\n}\n\n.class2 {\n  .mix(60);\n}\n',
  },
  {
    name: 'tests-unit/mixins-named-args/mixins-named-args.less',
    input:
      '.mixin (@a: 1px, @b: 50%) {\n  width: (@a * 5);\n  height: (@b - 1%);\n  args: @arguments;\n}\n.mixin (@a: 1px, @b: 50%) when (@b > 75%){\n  text-align: center;\n}\n\n.named-arg {\n  color: blue;\n  .mixin(@b: 100%);\n}\n\n.class {\n  @var: 20%;\n  .mixin(@b: @var);\n}\n\n.all-args-wrong-args {\n  .mixin(@b: 10%, @a: 2px);\n}\n\n.mixin2 (@a: 1px, @b: 50%, @c: 50) {\n  width: (@a * 5);\n  height: (@b - 1%);\n  color: (#000000 + @c);\n}\n\n.named-args2 {\n  .mixin2(3px, @c: 100);\n}\n\n.named-args3 {\n  .mixin2(@b: 30%, @c: #123456);\n}\n',
  },
  {
    name: 'tests-unit/mixins-interpolated/mixins-interpolated.less',
    input:
      '@a0: \\123;\n@a1: foo;\n@a2: ~".foo";\n@a4: ~"#foo";\n\n.@{a0} {\n    a: 0;\n}\n\n.@{a1} {\n    a: 1;\n}\n\n@{a2} {\n    a: 2;\n}\n\n#@{a1} {\n    a: 3;\n}\n\n@{a4} {\n    a: 4;\n}\n\nmi-test-a {\n    .\\123();\n    .foo();\n    #foo();\n}\n\n.b .bb {\n    &.@{a1}-xxx .yyy-@{a1}@{a4} {\n        & @{a2}.bbb {\n            b: 1;\n        }\n    }\n}\n\nmi-test-b {\n    .b.bb.foo-xxx.yyy-foo#foo.foo.bbb();\n}\n\n@c1: @a1;\n@c2: bar;\n@c3: baz;\n\n#@{c1}-foo {\n    > .@{c2} {\n        .@{c3} {\n            c: c;\n        }\n    }\n}\n\nmi-test-c {\n    &-1 {#foo-foo();}\n    &-2 {#foo-foo > .bar();}\n    &-3 {#foo-foo > .bar.baz();}\n}\n\n.Person(@name, @gender_) {\n    .@{name} {\n        @gender: @gender_;\n        .sayGender() {\n            gender: @gender;\n        }\n    }\n}\n\nmi-test-d {\n    .Person(person, "Male");\n    .person.sayGender();\n}\n',
  },
  {
    name: 'tests-unit/mixins-important/mixins-important.less',
    input:
      '.submixin(@a) {\n  border-width: @a;\n}\n.mixin (9) {\n  border: 9 !important;\n}\n.mixin (@a: 0) {\n  border: @a;\n  boxer: @a;\n  .inner {\n    test: @a;\n  }\n  // comment\n  .submixin(@a);\n}\n\n.class {\n  .mixin(1);\n  .mixin(2) !important;\n  .mixin(3);\n  .mixin(4) !important;\n  .mixin(5);\n  .mixin() !important;\n  .mixin(9);\n}\n.size(@aaa: auto) {\n  .set-width(@aaa) {\n    width: @aaa;\n  }\n  .set-width(@aaa);\n}\n.when-calling-nested-issue-2394 {\n  .size() !important;\n}\n.when-calling-nested-with-param-issue-2394 {\n  .size(10px) !important;\n}\n.test-ruleMixin-2421 () {\n    .topCheck-2421 () {\n        .nestedCheck-2421() {\n            margin: 5px;\n        }\n        .nestedCheck-2421();\n    }\n    .topCheck-2421();\n}\n.class1-2421 {\n    .test-ruleMixin-2421() !important;\n}\n.class2-2421 {\n    .test-ruleMixin-2421();\n}\n',
  },
  {
    name: 'tests-unit/mixins-guards-default-func/mixins-guards-default-func.less',
    input:
      "// basics:\n\nguard-default-basic-1 {\n    .m(1)                   {case:     1}\n    .m(@x) when (default()) {default: @x}\n\n    &-1 {.m(1)}\n    &-2 {.m(2)}\n}\n\nguard-default-basic-2 {\n    .m(1)                   {case:     1}\n    .m(2)                   {case:     2}\n    .m(3)                   {case:     3}\n    .m(@x) when (default()) {default: @x}\n\n    &-0 {.m(0)}\n    &-2 {.m(2)}\n}\n\nguard-default-basic-3 {\n    .m(@x) when (@x = 1)    {case:     1}\n    .m(2)                   {case:     2}\n    .m(@x) when (@x = 3)    {case:     3}\n    .m(@x) when (default()) {default: @x}\n\n    &-0 {.m(0)}\n    &-2 {.m(2)}\n    &-3 {.m(3)}\n}\n\nguard-default-definition-order {\n    .m(@x) when (default()) {default: @x}\n    .m(@x) when (@x = 1)    {case:     1}\n    .m(2)                   {case:     2}\n    .m(@x) when (@x = 3)    {case:     3}\n\n    &-0 {.m(0)}\n    &-2 {.m(2)}\n    &-2 {.m(3)}\n}\n\n// out of guard:\n\nguard-default-out-of-guard {\n    .m(1)                              {case-1:   1}\n    .m(@x: default()) when (default()) {default: @x}\n\n    &-0 {\n        case-0: default();\n        .m(1);\n        .m(2);\n        case-2: default();\n    }\n    &-1 {.m(default())}\n    &-2 {.m()}\n}\n\n// expressions:\n\nguard-default-expr-not {\n    .m(1)                      {case:     1}\n    .m(@x) when not(default()) {default: @x}\n\n    &-1 {.m(1)}\n    &-2 {.m(2)}\n}\n\nguard-default-expr-eq {\n    .m(@x) when (@x = true)      {case:    @x}\n    .m(@x) when (@x = false)     {case:    @x}\n    .m(@x) when (@x = default()) {default: @x}\n\n    &-true  {.m(true)}\n    &-false {.m(false)}\n}\n\nguard-default-expr-or {\n    .m(1)                             {case:     1}\n    .m(2)                             {case:     2}\n    .m(@x) when (default()), (@x = 2) {default: @x}\n\n    &-1 {.m(1)}\n    &-2 {.m(2)}\n    &-3 {.m(3)}\n}\n\nguard-default-expr-and {\n    .m(1)                                {case:     1}\n    .m(2)                                {case:     2}\n    .m(@x) when (default()) and (@x = 3) {default: @x}\n\n    &-1 {.m(1)}\n    &-2 {.m(2)}\n    &-3 {.m(3)}\n    &-4 {.m(4)}\n}\n\nguard-default-expr-always {\n    .m(1)                                   {case:     1}\n    .m(@x) when (default()), not(default()) {default: @x} // always match\n\n    &-1 {.m(1)}\n    &-2 {.m(2)}\n}\n\nguard-default-expr-never {\n    .m(1)                                      {case:     1}\n    .m(@x) when (default()) and not(default()) {default: @x} // never match\n\n    &-1 {.m(1)}\n    &-2 {.m(2)}\n}\n\n\n// not conflicting multiple default() uses:\n\nguard-default-multi-1 {\n    .m(0)                   {case:       0}\n    .m(@x) when (default()) {default-1: @x}\n    .m(2)  when (default()) {default-2: @x}\n\n    &-0 {.m(0)}\n    &-1 {.m(1)}\n}\n\nguard-default-multi-2 {\n    .m(1, @x)   when (default()) {default-1: @x}\n    .m(2, @x)   when (default()) {default-2: @x}\n    .m(@x, yes) when (default()) {default-3: @x}\n\n    &-1 {.m(1, no)}\n    &-2 {.m(2, no)}\n    &-3 {.m(3, yes)}\n}\n\nguard-default-multi-3 {\n    .m(red)                                    {case-1: darkred}\n    .m(blue)                                   {case-2: darkblue}\n    .m(@x) when (iscolor(@x)) and (default())  {default-color: @x}\n    .m('foo')                                  {case-1: I am 'foo'}\n    .m('bar')                                  {case-2: I am 'bar'}\n    .m(@x) when (isstring(@x)) and (default()) {default-string: I am @x}\n\n    &-blue  {.m(blue)}\n    &-green {.m(green)}\n    &-foo   {.m('foo')}\n    &-baz   {.m('baz')}\n}\n\nguard-default-multi-4 {\n    .m(@x) when (default()), not(default())    {always: @x}\n    .m(@x) when (default()) and not(default()) {never:  @x}\n    .m(2)                                      {case:    2}\n\n    .m(1);\n    .m(2);\n}\n\nguard-default-not-ambiguous-2 {\n    .m(@x)                     {case:         1}\n    .m(@x) when (default())    {default:     @x}\n    .m(@x) when not(default()) {not-default: @x}\n\n    .m(2);\n}\n\nguard-default-not-ambiguous-3 {\n    .m(@x)                     {case:           1}\n    .m(@x) when not(default()) {not-default-1: @x}\n    .m(@x) when not(default()) {not-default-2: @x}\n\n    .m(2);\n}\n\n// default & scope\n\nguard-default-scopes {\n    .s1() {.m(@v)                  {one: no condition}}\n    .s2() {.m(@v) when (@v)        {two: when true}}\n    .s3() {.m(@v) when (default()) {three: when default}}\n\n    &-3 {\n        .s2();\n        .s3();\n        .m(false);\n    }\n\n    &-1 {\n        .s1();\n        .s3();\n        .m(false);\n    }\n}\n\n",
  },
  {
    name: 'tests-unit/mixins-guards/mixins-guards.less',
    input:
      '// Stacking, functions..\n\n.light (@a) when (lightness(@a) > 50%) {\n  color: inherit;\n}\n.light (@a) when (lightness(@a) < 50%) {\n  color: black;\n}\n.light (@a) {\n  margin: 1px;\n}\n\n.light1 { .light(#ddd) }\n.light2 { .light(#444) }\n\n// Arguments against each other\n\n.max (@a, @b) when (@a > @b) {\n  width: @a;\n}\n.max (@a, @b) when (@a < @b) {\n  width: @b;\n}\n\n.max1 { .max(3, 6) }\n.max2 { .max(8, 1) }\n\n// Globals inside guards\n\n@g: auto;\n\n.glob (@a) when (@a = @g) {\n  margin: @a @g;\n}\n.glob1 { .glob(auto) }\n\n// Other operators\n\n.ops (@a) when (@a >= 0) {\n  height: gt-or-eq;\n}\n.ops (@a) when (@a =< 0) {\n  height: lt-or-eq;\n}\n.ops (@a) when (@a <= 0) {\n  height: lt-or-eq-alias;\n}\n.ops (@a) when not(@a = 0) {\n  height: not-eq;\n}\n.ops1 { .ops(0) }\n.ops2 { .ops(1) }\n.ops3 { .ops(-1) }\n\n// Scope and default values\n\n@a: auto;\n\n.default (@a: inherit) when (@a = inherit) {\n  content: default;\n}\n.default1 { .default() }\n\n// true & false keywords\n.test-rule (@a) when (@a) {\n    content: "true.";\n}\n.test-rule (@a) when not (@a) {\n    content: "false.";\n}\n\n.test-rule1 { .test-rule(true) }\n.test-rule2 { .test-rule(false) }\n.test-rule3 { .test-rule(1) }\n.test-rule4 { .test-rule(boo) }\n.test-rule5 { .test-rule("true") }\n\n// Boolean expressions\n\n.bool () when (true) and (false)                             { content: true and false } // FALSE\n.bool () when (true) and (true)                              { content: true and true } // TRUE\n.bool () when (true)                                         { content: true } // TRUE\n.bool () when (false) and (false)                            { content: true } // FALSE\n.bool () when (false), (true)                                { content: false, true } // TRUE\n.bool () when (false) and (true) and (true),  (true)         { content: false and true and true, true } // TRUE\n.bool () when (true)  and (true) and (false), (false)        { content: true and true and false, false } // FALSE\n.bool () when (false), (true) and (true)                     { content: false, true and true } // TRUE\n.bool () when (false), (false), (true)                       { content: false, false, true } // TRUE\n.bool () when (false), (false) and (true), (false)           { content: false, false and true, false } // FALSE\n.bool () when (false), (true) and (true) and (true), (false) { content: false, true and true and true, false } // TRUE\n.bool () when not (false)                                    { content: not false }\n.bool () when not (true) and not (false)                     { content: not true and not false }\n.bool () when not (true) and not (true)                      { content: not true and not true }\n.bool () when not (false) and (false), not (false)           { content: not false and false, not false }\n\n.bool1 { .bool() }\n\n.equality-unit-test(@num) when (@num = 1%) {\n  test: fail;\n}\n.equality-unit-test(@num) when (@num = 2) {\n  test: pass;\n}\n.equality-units {\n  .equality-unit-test(1px);\n  .equality-unit-test(2px);\n}\n\n.colorguard(@col) when (@col = red)                         { content: is @col; }\n.colorguard(@col) when not (blue = @col)                    { content: is not blue its @col; }\n.colorguard(@col)                                           {}\n.colorguardtest {\n    .colorguard(red);\n    .colorguard(blue);\n    .colorguard(purple);\n}\n\n.stringguard(@str) when (@str = "theme1")\t\t\t\t\t{ content: @str is "theme1"; }\n.stringguard(@str) when not ("theme2" = @str)\t\t\t\t{ content: @str is not "theme2"; }\n.stringguard(@str) when (@str = \'theme1\')\t\t\t\t\t{ content: @str is \'theme1\'; }\n.stringguard(@str) when not (\'theme2\' = @str)\t\t\t\t{ content: @str is not \'theme2\'; }\n.stringguard(@str) when (~"theme1" = @str)\t\t\t\t\t{ content: @str is theme1; }\n.stringguard(@str)                                          {}\n.stringguardtest {\n    .stringguard("theme1");\n    .stringguard("theme2");\n    .stringguard(\'theme1\');\n    .stringguard(\'theme2\');\n    .stringguard(theme1);\n}\n\n.generic(@a, @b) {/**/}\n.generic(@a, @b) when (@a = @b) {content: @a is equal to @b}\n.generic(@a, @b) when (@b = @a) {content: @b is equal to @a too}\n.generic(@a, @b) when (@a < @b) {content: @a is less than @b}\n.generic(@a, @b) when (@b < @a) {content: @b is less than @a too}\n.generic(@a, @b) when (@a > @b) {content: @a is greater than @b}\n.generic(@a, @b) when (@b > @a) {content: @b is greater than @a too}\n.generic(@a, @b) when not(@a = @b) {content: @a is not equal to @b}\n.generic(@a, @b) when not(@b = @a) {content: @b is not equal to @a too}\n\n.variouse-types-comparison {\n    .generic(true, false);\n    .generic(1, true);\n    .generic(2, 2px);\n    .generic(3, ~"3");\n    .generic(5, ~"4");\n    .generic(abc, ~"abc");\n    .generic(abc, "abc");\n    .generic(\'abc\', "abd");\n    .generic(6, e("6"));\n    .generic(9, 8);\n    .generic(a, b);\n    .generic(1 2, 3);\n}\n\n.list-comparison {\n    .generic(a b c, a b c);\n    .generic(a b c, a b d);\n    .generic(a, b, c; a, b, c);\n    .generic(a, b, c; a, b, d);\n    .generic(1 2px 300ms, 1em 2 .3s);\n    \n    @space-list: 1 2 3;\n    @comma-list: 1, 2, 3;\n    @compound: @space-list @comma-list;\n    \n    .generic(@space-list, @comma-list);\n    .generic(@comma-list, ~"1, 2, 3");\n    .generic(@compound, @space-list @comma-list);\n    .generic(@compound, @comma-list @space-list);\n    .generic(@compound 4, ~"1 2 3 1, 2, 3 4");\n}\n\n.mixin(...) {\n  catch:all;\n}\n.mixin(@var) when (@var=4) {\n  declare: 4;\n}\n.mixin(@var) when (@var=4px) {\n  declare: 4px;\n}\n#tryNumberPx {\n  .mixin(4px);\n}\n\n.lock-mixin(@a) {\n .inner-locked-mixin(@x: @a) when (@a = 1) {\n    a: @a;\n    x: @x;\n  }\n}\n.call-lock-mixin {\n  .lock-mixin(1);\n  .call-inner-lock-mixin {\n    .inner-locked-mixin();\n  }\n}\n.bug-100cm-1m(@a) when (@a = 1) {\n  .failed {\n    one-hundred: not-equal-to-1;\n  }\n}\n.bug-100cm-1m(100cm);\n\n#ns {\n    .mixin-for-root-usage(@a) when (@a > 0) {\n        .mixin-generated-class {\n            a: @a;\n        }\n    }\n}\n\n#ns > .mixin-for-root-usage(1);\n\n@namespaceGuard: 1;\n#guarded when (@namespaceGuard>0) {\n  #deeper {\n    .mixin() {\n      guarded: namespace;\n    }\n  }\n}\n#guarded() when (@namespaceGuard>0) {\n  #deeper {\n    .mixin() {\n      silent: namespace;\n    }\n  }\n}\n#guarded(@variable) when (@namespaceGuard>0) {\n  #deeper {\n    .mixin() {\n      should: not match because namespace argument;\n    }\n  }\n}\n#guarded(@variable: default) when (@namespaceGuard>0) {\n  #deeper {\n    .mixin() {\n      guarded: with default;\n    }\n  }\n}\n#guarded when (@namespaceGuard<0) {\n  #deeper {\n    .mixin() {\n      should: not match because namespace guard;\n    }\n  }\n}\n#guarded-caller {\n  #guarded > #deeper > .mixin();\n}\n#top {\n  #deeper when (@namespaceGuard<0) {\n    .mixin(@a) {\n      should: not match because namespace guard;\n    }\n  }\n  #deeper() when (@namespaceGuard>0) {\n    .mixin(@a) {\n      should: match @a;\n    }\n  }\n}\n#guarded-deeper {\n  #top > #deeper > .mixin(1);\n}\n\n// namespaced & guarded mixin in root\n// outputs nothing but should pass:\n\n@guarded-mixin-for-root: true;\n#ns {\n    .guarded-mixin-for-root() when (@guarded-mixin-for-root) {}\n}\n#ns > .guarded-mixin-for-root();\n// various combinations of nested or, and, parenthesis and negation\n.parenthesisNot(@value) when ((((@value)))) {\n  parenthesisNot: just-value;\n}\n.parenthesisNot(@value) when (((not(@value)))) {\n  parenthesisNot: negated once inside;\n}\n.parenthesisNot(@value) when not((((@value)))) {\n  parenthesisNot: negated once outside;\n}\n.parenthesisNot(@value) when ((not((@value)))) {\n  parenthesisNot: negated once middle;\n}\n.parenthesisNot(@value) when not(((not(@value)))) {\n  parenthesisNot: negated twice 1;\n}\n.parenthesisNot(@value) when (not((not(@value)))) {\n  parenthesisNot: negated twice 2;\n}\n.parenthesisNot(@value) when ((not(not(@value)))) {\n  parenthesisNot: negated twice 3;\n}\n.parenthesisNot (...) when (default()) {\n  parenthesisNot: none matched;\n}\n\n#parenthesisNot-true {\n  .parenthesisNot(true);\n}\n#parenthesisNot-false {\n  .parenthesisNot(false);\n}\n\n.orderOfEvaluation(@a1, @a2, @a3) when ((@a1) and (@a2) or (@a3)) {\n  no-parenthesis: evaluated true 1a;\n}\n.orderOfEvaluation(@a1, @a2, @a3) when ((@a3) or (@a1) and (@a2)) {\n  no-parenthesis: evaluated true 1b;\n}\n.orderOfEvaluation(@a1, @a2, @a3) when ((@a1) and ((@a2) or (@a3))) {\n  no-parenthesis: evaluated true 1c;\n}\n.orderOfEvaluation(@a1, @a2, @a3) when (@a3), (@a1) and (@a2) {\n  no-parenthesis: evaluated true 1d;\n}\n.orderOfEvaluation(@a1, @a2, @a3) when (((@a3) or (@a1)) and (@a2)) {\n  no-parenthesis: evaluated true 1e;\n}\n.orderOfEvaluation(@a1, @a2, @a3) when ((@a1) and (@a2) or not (@a3)) {\n  no-parenthesis: evaluated true 2a;\n}\n.orderOfEvaluation(@a1, @a2, @a3) when (not (@a3) or (@a1) and (@a2)) {\n  no-parenthesis: evaluated true 2b;\n}\n.orderOfEvaluation(@a1, @a2, @a3) when not (@a3), (@a1) and (@a2) {\n  no-parenthesis: evaluated true 2c;\n}\n.orderOfEvaluation(@a1, @a2, @a3) when (not (@a1) and (@a2) or (@a3)) {\n  no-parenthesis: evaluated true 3;\n}\n.orderOfEvaluation(@a1, @a2, @a3) when ((((@a1) and (@a2) or (@a3)))) {\n  no-parenthesis: evaluated true 4;\n}\n.orderOfEvaluation(@a1, @a2, @a3) when (((@a1) and (@a2)) or (@a3)) {\n  with-parenthesis: evaluated true;\n}\n.orderOfEvaluation(...) when (default()) {\n  orderOfEvaluation: evaluated false;\n}\n#orderOfEvaluation-false-false-true {\n  .orderOfEvaluation(false, false, true);\n}\n#orderOfEvaluation-false-false-false {\n  .orderOfEvaluation(false, false, false);\n}\n#orderOfEvaluation-true-true-false {\n  .orderOfEvaluation(true, true, false);\n}\n\n// not without parentheses should work the same as not with parentheses\n.test-not-noparens (@a) when not @a {\n    content: "not without parens false.";\n}\n.test-not-noparens (@a) when (@a) {\n    content: "not without parens true.";\n}\n\n.test-not-noparens1 { .test-not-noparens(true) }\n.test-not-noparens2 { .test-not-noparens(false) }\n\n',
  },
  {
    name: 'tests-unit/mixins-closure/mixins-closure.less',
    input:
      '.scope {\n    @var: 99px;\n    .mixin () {\n        width: @var;\n    }\n}\n\n.class {\n    .scope > .mixin();\n}\n\n.overwrite {\n    @var: 0px;\n    .scope > .mixin();\n}\n\n.nested {\n    @var: 5px;\n    .mixin () {\n        width: @var;\n    }\n    .class {\n        @var: 10px;\n       .mixin();\n    }\n}\n',
  },
  {
    name: 'tests-unit/mixins/maps.less',
    input:
      '.maps {\n    @a: 10;\n    h2 { width: unit(@a, px); }\n\n    .mk-map() {\n        text: white;\n        background: black;\n    }\n\n    @p: .mk-map();\n\n    h1 { color: @p[text]; }\n}\n\n\n',
  },
  {
    name: 'tests-unit/mixins/mixins-advanced.less',
    input:
      '// Advanced mixin call tests to cover edge cases\n\n// Mixin call with expanded arguments\n.mixin(@a, @b) {\n  a: @a;\n  b: @b;\n}\n@args: 1px, 2px;\n.test-expanded {\n  .mixin(@args...);\n}\n\n// Mixin call with condition matching and multiple definitions\n.mixin-multi-def(@x: 10) when (@x > 10) {\n  large: @x;\n}\n.mixin-multi-def(@x: 10) when (@x <= 10) {\n  small: @x;\n}\n.test-multi-def {\n  .mixin-multi-def();\n  .mixin-multi-def(15);\n}\n\n// Mixin call with condition matching\n.mixin-guarded(@x) when (@x > 10) {\n  large: @x;\n}\n.mixin-guarded(@x) when (@x <= 10) {\n  small: @x;\n}\n.test-conditions {\n  .mixin-guarded(15);\n  .mixin-guarded(5);\n}\n\n// Mixin call with no arguments filter\n.mixin-no-args() {\n  no-args: true;\n}\n.mixin-no-args(@x) {\n  with-args: @x;\n}\n.test-no-args-filter {\n  .mixin-no-args();\n  .mixin-no-args(10);\n}\n\n// Mixin call with recursive mixin\n.mixin-recursive(@n) when (@n > 0) {\n  level: @n;\n  .mixin-recursive(@n - 1);\n}\n.mixin-recursive(@n) when (@n <= 0) {\n  done: true;\n}\n.test-recursive {\n  .mixin-recursive(3);\n}\n\n// Mixin call with namespace path\n#namespace {\n  .mixin() {\n    from-namespace: true;\n  }\n}\n.test-namespace-path {\n  #namespace > .mixin();\n}\n\n// Mixin call with important flag\n.mixin-important() {\n  important: true;\n}\n.test-important {\n  .mixin-important() !important;\n}\n\n// Mixin call with multiple candidates\n.mixin-multi(@x: 1) {\n  value1: @x;\n}\n.mixin-multi(@x: 2) {\n  value2: @x;\n}\n.test-multi {\n  .mixin-multi();\n}\n\n// Mixin call with named arguments\n.mixin-named(@a: a, @b: b) {\n  a: @a;\n  b: @b;\n}\n.test-named {\n  .mixin-named(@b: B, @a: A);\n}\n\n// Mixin call with expanded array\n.mixin-array(@a, @b, @c) {\n  a: @a;\n  b: @b;\n  c: @c;\n}\n@array: 1, 2, 3;\n.test-array-expand {\n  .mixin-array(@array...);\n}\n\n',
  },
  {
    name: 'tests-unit/mixins/mixins.less',
    input:
      '.mixin { border: 1px solid black; }\n.mixout { border-color: orange; }\n.borders { border-style: dashed; }\n.mixin > * { border: do not match me; }\n\n#namespace {\n  .borders {\n    border-style: dotted;\n  }\n  .biohazard {\n    content: "death";\n    .man {\n      color: transparent;\n    }\n  }\n}\n#theme {\n  > .mixin {\n    background-color: grey;\n  }\n}\n#container {\n  color: black;\n  .mixin();\n  .mixout ();\n  #theme > .mixin();\n}\n\n#header {\n  .milk {\n    color: inherit;\n    .mixin();\n    #theme > .mixin();\n  }\n  #cookie {\n    .chips {\n      #namespace .borders();\n      .calories {\n        #container();\n      }\n    }\n    .borders();\n  }\n}\n.secure-zone { #namespace .biohazard .man(); }\n.direct {\n  #namespace > .borders();\n}\n\n.bo, .bar {\n    width: 100%;\n}\n.bo {\n    border: 1px;\n}\n.ar.bo.ca {\n    color: black;\n}\n.jo.ki {\n    background: none;\n}\n.amp {\n    &.support {\n        color: orange;\n        .higher {\n            top: 0px;\n        }\n        &.deeper {\n            height: auto;\n        }\n    }\n}\n.extended {\n    .bo();\n    .jo.ki();\n    .amp.support();\n    .amp.support.higher();\n    .amp.support.deeper();\n}\n.do .re .mi .fa {\n    .sol .la {\n        .si {\n            color: cyan;\n        }\n    }\n}\n.mutli-selector-parents {\n    .do.re.mi.fa.sol.la.si();\n}\n.foo .bar {\n  .bar();\n}\n.has_parents() {\n  & .underParents {\n    color: red;\n  }\n}\n.has_parents();\n.parent {\n  .has_parents();\n}\n.margin_between(@above, @below) {\n     * + & { margin-top: @above; }\n     legend + & { margin-top: 0; }\n     & + * { margin-top: @below; }\n}\nh1 { .margin_between(25px, 10px); }\nh2 { .margin_between(20px, 8px); }\nh3 { .margin_between(15px, 5px); }\n\n.mixin_def(@url, @position){\n    background-image: @url;\n    background-position: @position;\n}\n.error{\n  @s: "/";\n  .mixin_def( "@{s}a.png", center center);\n}\n.recursion() {\n  color: black;\n}\n.test-rule-rec {\n  .recursion {\n    .recursion();\n  }\n}\n.paddingFloat(@padding) { padding-left: @padding; }\n\n.button {\n    .paddingFloat(((10px + 12) * 2));\n\n    &.large { .paddingFloat(((10em * 2) * 2)); }\n}\n.clearfix() {\n  // ...\n}\n.clearfix {\n  .clearfix();\n}\n.clearfix {\n  .clearfix();\n}\n.foo {\n  .clearfix();\n}\n',
  },
  {
    name: 'tests-unit/mixin-noparens/mixin-noparens.less',
    input:
      '#theme {\n  > .mixin {\n    background-color: grey;\n  }\n}\n#container {\n  color: black;\n  #theme > .mixin;\n}\n',
  },
  {
    name: 'tests-unit/merge/merge.less',
    input:
      "// Merge functionality tests\n.first-transform() {\n  transform+: rotate(90deg), skew(30deg);\n}\n.second-transform() {\n  transform+: scale(2,4);\n}\n.third-transform() {\n  transform: scaleX(45deg);\n}\n.fourth-transform() {\n  transform+: scaleX(45deg);\n}\n.fifth-transform() {\n  transform+: scale(2,4) !important;\n}\n.first-background() {\n  background+: url(data://img1.png);\n}\n.second-background() {\n  background+: url(data://img2.png);\n}\n\n.test-rule1 {\n  // Can merge values\n  .first-transform();\n  .second-transform();\n}\n.test-rule2 {\n  // Won't merge values without +: merge directive, for backwards compatibility with css\n  .first-transform();\n  .third-transform();\n}\n.test-rule3 {\n  // Won't merge values from two sources with different properties\n  .fourth-transform();\n  .first-background();\n}\n.test-rule4 {\n  .first-transform();\n  .fifth-transform();\n}\n.test-rule5 {\n  .first-transform();\n  .second-transform() !important;\n}\n.test-rule6 {\n  .second-transform();\n}\n.test-rule7 {\n  // inherit !important from merged subrules\n  .second-transform();\n  .second-transform() !important;\n  .second-transform();\n}\n\n.test-rule-interleaved {\n    transform+:  t1;\n    background+: b1;\n    transform+:  t2;\n    background+: b2, b3;\n    transform+:  t3;\n}\n\n.test-rule-spaced {\n    transform+_:  t1;\n    background+_: b1;\n    transform+_:  t2;\n    background+_: b2, b3;\n    transform+_:  t3;\n}\n\n.test-rule-interleaved-with-spaced {\n    transform+_:  t1s;\n    transform+:   t2;\n    background+:  b1;\n    transform+_:  t3s;\n    transform+:   t4 t5s;\n    background+_: b2s, b3;\n    transform+_:  t6s;\n    background+:  b4;\n}\n",
  },
  {
    name: 'tests-unit/media/media.less',
    input:
      '// For now, variables can\'t be declared inside @media blocks.\n\n@var: 42;\n\n@media print {\n    .class {\n        color: blue;\n        .sub {\n            width: @var;\n        }\n    }\n    .top, header > h1 {\n        color: (#222 * 2);\n    }\n}\n\n@media screen {\n    @base: 8;\n    .body { max-width: (@base * 60); }\n}\n\n@ratio_large: 16;\n@ratio_small: 9;\n\n@media all and (device-aspect-ratio: ~\'@{ratio_large} / @{ratio_small}\') {\n   .body { max-width: 800px; }\n}\n\n@media all and (orientation:portrait) {\n    aside { float: none; }\n}\n\n@media handheld and (min-width: @var), screen and (min-width: 20em) {\n    .body {\n        max-width: 480px;\n    }\n}\n\n.body {\n    @media print {\n        padding: 20px;\n\n        header {\n            background-color: red;\n        }\n\n        @media (orientation:landscape) {\n            margin-left: 20px;\n        }\n    }\n}\n\n@media screen {\n  .sidebar {\n    width: 300px;\n    @media (orientation: landscape) {\n      width: 500px;\n    }\n  }\n}\n\n@media a {\n  .first {\n    @media (b) {\n      .second {\n        .third {\n          width: 300px;\n          @media (c) {\n            width: 500px;\n          }\n        }\n        .fourth {\n          width: 3;\n        }\n      }\n    }\n  }\n}\n\n.body {\n    @media a, (b) and (c) {\n        width: 95%;\n\n        @media (x), (y) {\n            width: 100%;\n        }\n    }\n}\n\n.mediaMixin(@fallback: 200px) {\n    background: black;\n\n    @media handheld {\n        background: white;\n\n        @media (max-width: @fallback) {\n            background: red;\n        }\n    }\n}\n\n.a {\n  .mediaMixin(100px);\n}\n\n.b {\n  .mediaMixin();\n}\n@smartphone: ~"only screen and (max-width: 200px)";\n@media @smartphone {\n  .body {\n    width: 480px;\n  }\n}\n\n@media print {\n  @page :left {\n    margin: 0.5cm;\n  }\n  @page :right {\n    margin: 0.5cm;\n  }\n  @page Test:first {\n    margin: 1cm;\n  }\n  @page :first {\n    size: 8.5in 11in;\n    @top-left {\n      margin: 1cm;\n    }\n    @top-left-corner {\n      margin: 1cm;\n    }\n    @top-center {\n      margin: 1cm;\n    }\n    @top-right {\n      margin: 1cm;\n    }\n    @top-right-corner {\n      margin: 1cm;\n    }\n    @bottom-left {\n      margin: 1cm;\n    }\n    @bottom-left-corner {\n      margin: 1cm;\n    }\n    @bottom-center {\n      margin: 1cm;\n    }\n    @bottom-right {\n      margin: 1cm;\n    }\n    @bottom-right-corner {\n      margin: 1cm;\n    }\n    @left-top {\n      margin: 1cm;\n    }\n    @left-middle {\n      margin: 1cm;\n    }\n    @left-bottom {\n      margin: 1cm;\n    }\n    @right-top {\n      margin: 1cm;\n    }\n    @right-middle {\n      content: "Page " counter(page);\n    }\n    @right-bottom {\n      margin: 1cm;\n    }\n  }\n}\n\n@media (-webkit-min-device-pixel-ratio: 2), (min--moz-device-pixel-ratio: 2), (-o-min-device-pixel-ratio: ~"2/1"), (min-resolution: 2dppx), (min-resolution: 128dpcm) {\n  .b {\n    background: red;\n  }\n}\n\n.bg() {\n    background: red;\n\n    @media (max-width: 500px) {\n        background: green;\n    }\n}\n\n.body {\n    .bg();\n}\n\n@bpMedium: 1000px;\n@media (max-width: @bpMedium) {\n    .body {\n        .bg();\n        background: blue;\n    }\n}\n\n@media (max-width: 1200px) {\n  /* a comment */\n\n  @media (max-width: 900px) {\n    .body { font-size: 11px; }\n  }\n}\n\n.nav-justified {\n  @media (min-width: 480px) {\n    > li {\n      display: table-cell;\n    }\n  }\n}\n\n.menu\n{\n  @media (min-width: 768px) {\n    .nav-justified();\n  }\n}\n@all: ~"all";\n@tv: ~"(tv)";\n@media @all and @tv {\n  .all-and-tv-variables {\n    var: all-and-tv;\n  }\n}\n\n@some-var: 60px;\n@media screen and (min-width: (@some-var + 1)) {\n  .selector {\n    foo: bar;\n  }\n}\n\n@media screen and (color), projection and (color) {\n  .selector {\n    color: #eee;\n  }\n}\n\n@media not (width <= -100px) {\n  body { \n    background: green; \n  }\n}\n\n@media (height > -100px) {\n  body { \n    background: green; \n  }\n}\n\n@media not (resolution: -300dpi) {\n  body { \n    background: green; \n  }\n}\n\n@media (min-orientation:portrait) {\n  body { \n    background: green; \n  }\n}\n\n@media print and (min-resolution: 118dpcm) {\n  body { \n    background: green; \n  }\n}\n\n@media (200px <= width <= 500px) {\n  .test-range-syntax {\n      padding: 0;\n  }\n}\n\n.selector {\n  color: #eee;\n\n  @media (200px <= width <= 500px) {\n    .test-range-syntax {\n        padding: 0;\n    }\n  }\n}\n\n@media print, (max-width: 992px) {\n    div {\n        color: red;\n    }\n}\n\n.form-process-table {\n    @media screen and(max-width: 1280px) {\n        color: red;\n    }\n}\n\n@media ((color) and (hover)), all {\n  body {\n    background: green;\n  }\n}\n',
  },
  {
    name: 'tests-unit/lazy-eval/lazy-eval.less',
    input:
      '// Lazy evaluation tests\n@var: @a;\n@a: 100%;\n\n.lazy-eval {\n  width: @var;\n}\n',
  },
  {
    name: 'tests-unit/layer/layer.less',
    input:
      '.main {\n    @layer {\n        &::before {\n            color: #f00;\n        }\n    }\n}\n\n@layer legacy {\n    @import "./import/layer-import.less";\n}\n\n@import url("/import/layer-import-2.css") layer(foo);\n@import url("/import/layer-import-3.css") layer(responsive) supports(display: flex) screen and (max-width: 768px);\n@import url("/import/layer-import-4.css") layer(print) print;\n@import url("/import/layer-import-4.css") layer(print) print, (max-width: 600px);\n@import url("/import/layer-import-5.css") layer(features) supports(display: grid);\n\n@layer-name: primevue;\n\n@layer @layer-name {\n    .test {\n        foo: bar;\n    }\n}\n\n@layer reset, base, components, utilities;\n\n@layer reset {\n\n    *,\n    *::before,\n    *::after {\n        box-sizing: border-box;\n    }\n}\n\n@layer base {\n    body {\n        margin: 0;\n        font-family: system-ui, sans-serif;\n\n        header {\n            background-color: #f0f0f0;\n            padding: 1rem;\n        }\n    }\n}\n\n@layer components {\n    .button {\n        display: inline-block;\n        padding: 0.5rem 1rem;\n        background-color: blue;\n        color: white;\n\n        &:hover {\n            background-color: darkblue;\n        }\n    }\n}\n\n@layer utilities {\n    .text-center {\n        text-align: center;\n    }\n\n    .responsive {\n        width: 100%;\n\n        @media (min-width: 768px) {\n            width: 50%;\n        }\n    }\n}\n\n.parent {\n    color: black;\n\n    .child {\n        color: red;\n    }\n\n    &:hover {\n        background: lightgray;\n    }\n}\n\n@layer foo.baz {\n   .bar {\n       font-weight: bold;\n   }\n}\n\n@layer framework {\n    @layer layout {\n        .container {\n            display: grid;\n            gap: 2rem;\n        }\n    }\n}\n\n@layer framework.layout {\n    main {\n        padding: 2rem;\n    }\n    p {\n        margin-block: 1rem;\n        color: #555;\n    }\n}\n\n\n@layer theme;\n@layer layout, utilities;\n\nbody {\n  color: black;\n}\n\n@layer components {\n  .btn {\n    color: red;\n    &:hover {\n      color: blue;\n    }\n  }\n}\n\n@layer {\n  p {\n    margin-block: 1rem;\n  }\n}\n\n@layer framework.buttons.primary {\n  .btn-primary {\n    background: dodgerblue;\n    color: white;\n  }\n}\n\n.feature {\n  color: gray;\n\n  @layer component {\n    h2 {\n      font-size: 1.5rem;\n    }\n  }\n}\n\n@primary-color: rebeccapurple;\n\n.button-styles() {\n  padding: 0.5rem 1rem;\n  border-radius: 4px;\n}\n\n@layer ui {\n  .btn {\n    .button-styles();\n    background: @primary-color;\n    color: white;\n  }\n}\n',
  },
  {
    name: 'tests-unit/layer/import/layer-import.less',
    input: '.sub-rule {\n    ul {\n        color: white;\n    }\n}\n',
  },
  {
    name: 'tests-unit/layer/assets/import/layer-import.less',
    input: '.layer-import {\n  color: indigo;\n}\n\n',
  },
  {
    name: 'tests-unit/javascript/javascript.less',
    input:
      '// JavaScript evaluation tests\n.eval {\n    js: `42`;\n    js: `1 + 1`;\n    js: `"hello world"`;\n    js: `[1, 2, 3]`;\n    title: `typeof process.title`;\n    ternary: `(1 + 1 == 2 ? true : false)`;\n    multiline: `(function(){var x = 1 + 1;\n           return x})()`;\n}\n.scope {\n    --empty: `+function(){}`;\n    @foo: 42;\n    var: `parseInt(this.foo.toJS())`;\n    escaped: ~`2 + 5 + \'px\'`;\n}\n.vars {\n    @var: `4 + 4`;\n    width: @var;\n}\n.escape-interpol {\n    @world: "world";\n    width: ~`"hello" + " " + @{world}`;\n}\n.arrays {\n    @ary:  1, 2, 3;\n    @ary2: 1  2  3;\n    ary: `@{ary}.join(\', \')`;\n    ary1: `@{ary2}.join(\', \')`;\n}\n.transitions(...) {\n  @arg: ~`"@{arguments}".replace(/[\\[\\]]*/g, \'\')`;\n  one: @arg;              // rounded to integers\n  two: ~`"@{arguments}"`; // rounded to integers\n  three: @arguments;        // OK\n}\n.test-rule-tran {\n  .transitions(opacity 0.3s ease-in 0.3s, max-height 0.6s linear, margin-bottom 0.4s linear;);\n}\n',
  },
  {
    name: 'tests-unit/import/import-inline.less',
    input:
      '@import url("import/import-test-c.less");// import inline should not float above this #1954\n@import (inline) url("import/import-test-d.css") (min-width:600px);\n@import (inline, css) url("import/invalid-css.less");',
  },
  {
    name: 'tests-unit/import/import-interpolation.less',
    input:
      '@my_theme: "test";\n\n@import "import/import-@{my_theme}-e.less";\n\n@import "import/import-@{in}@{terpolation}.less";\n\n@import "import/interpolation-vars.less";\n\n',
  },
  {
    name: 'tests-unit/import/import-module.less',
    input:
      '@import "@less/test-import-module/one/two/three/3.less";\n@import "@less/test-import-module/one/two/2";\n@import "@less/test-import-module/one/1.less";\n',
  },
  {
    name: 'tests-unit/import/import-once.less',
    input:
      '@import "import/import-once-test-c";\n@import "import/import-once-test-c";\n@import "import/import-once-test-c.less";\n@import "import/deeper/import-once-test-a";\n@import (multiple) "import/import-test-f.less";\n@import (multiple) "import/import-test-f.less";',
  },
  {
    name: 'tests-unit/import/import-reference-issues.less',
    input:
      '// Tests following past issues:\n// * #1851 - Extend within (reference) imported files \n// * #1896 - Namespace imported less code does not get properly referenced, when there\'s a (reference) keyword.\n// * #1878 - extend inside referenced file should not extend outside selectors\n// * #2716 - A file imported by reference and then normally - multiple imports should be independent\n// * #1968 - When using an @import (reference), mixins that contain an & selector get added to the compiled output improperly\n// * #2162 - Cannot put import by reference inside of a mixin (also doubles #1896)\n// * #2991 - Empty @media queries generated through line comments when compiling less file with (reference)\n\n// #1878: extend inside referenced file should not extend outside selectors\n@import (reference) "import-reference-issues/global-scope-import.less";\n.theOnlySelector {\n  shall-have: one selector;\n}\n\n// #2716: A file imported by reference and then normally - multiple imports should be independent\n// #1878: - double nested version\n#do-not-show-import {\n  @import (reference, multiple) "import-reference-issues/multiple-import.less";\n}\n\nshow-all-content {\n  @import (multiple) "import-reference-issues/multiple-import.less";\n}\n// #1896: Namespace imported less code does not get properly referenced, when there\'s a (reference) keyword.\n#Namespace {\n  @import (less, reference) "import-reference-issues/simple-mixin.css";\n}\n#used-namespaced-mixin {\n  #Namespace > .mixin();\n  shall-see: another property above;\n}\n\n// #1851: Extend within (reference) imported files \n// test-b is in global-scope-import.less file\n.test-rule-c {\n  &:extend(.test-rule-b all);\n}\n\n// #1968: When using an @import (reference), mixins that contain an & selector get added to the compiled output improperly\n@import "import-reference-issues/mixin-1968.less";\n@import (reference) "import-reference-issues/appender-reference-1968.less";\n\n// #2162 - Cannot put import by reference inside of a mixin (also doubles #1896)\n.mixin-with-import-by-reference-inside() {\n  the-only-property: nothing-below-this;\n  @import (reference) "import-reference-issues/simple-ruleset-2162.less";\n}\ncall-mixin-with-import-by-reference-inside {\n  .mixin-with-import-by-reference-inside();\n}\n\n@import (reference) "import-reference-issues/comments-2991.less";',
  },
  {
    name: 'tests-unit/import/import-reference.less',
    input:
      '@import (reference) url("import-once.less");\n@import (reference) url("../css-3/css-3.less");\n@import (reference) url("../media/media.less");\n@import (reference) url("import/import-reference.less");\n@import (reference) url("import/css-import.less");\n\n.b {\n  .z();\n}\n\n.zz();\n\n.visible:extend(.z all) {\n  extend: test;\n}\n\n.test-rule-mediaq-import {\n  .mixin-with-mediaq(340px);\n}\n\n.class:extend(.class all) {\n}\n.mixin-with-nested-selectors();\n.mixin-with-directives(some-name);\n\n.print-referenced-import-inline();\n',
  },
  {
    name: 'tests-unit/import/import-remote.less',
    input:
      '// https://github.com/less/less.js/issues/3541\n@import (reference) url(https://cdn.jsdelivr.net/npm/@less/test-data/tests-unit/selectors/selectors.less);\n@import (reference) url("https://cdn.jsdelivr.net/npm/@less/test-data/tests-unit/media/media.less");\n@import (reference) url("https://cdn.jsdelivr.net/npm/@less/test-data/tests-unit/empty/empty.less?arg");\n\n.test {\n  color: @var;\n}',
  },
  {
    name: 'tests-unit/import/import.less',
    input:
      '/** comment at the top**/\n@plugin "../../plugin/plugin-simple";\n\n@import url(/absolute/something.css) screen and (color) and (max-width: 600px);\n\n@import (optional) "file-does-not-exist.does-not-exist";\n\n@var: 100px;\n@import url("//ha.com/file.css") (min-width:@var);\n\n#import-test {\n  .mixin();\n  width: 10px;\n  height: (@a + 10%);\n  value: pi-anon();\n}\n@import "import/import-test-e" screen and (max-width: 600px);\n\n@import url("import/import-test-a.less");\n\n@import (less, multiple) "import/import-test-d.css" screen and (max-width: 601px);\n\n@import (multiple) "import/import-test-e" screen and (max-width: 602px);\n\n@import (less, multiple) url("import/import-test-d.css") screen and (max-width: 603px);\n\n@media print {\n  @import (multiple) "import/import-test-e";\n}\n\n@charset "UTF-8"; // climb on top #2126\n\n',
  },
  {
    name: 'tests-unit/import/import-reference-issues/appender-reference-1968.less',
    input:
      '.container-no-parent-selector {\n   .mixin-no-parent-selector();\n}\n.container-with-parent-selector {\n  .mixin-with-parent-selector()\n}\n',
  },
  {
    name: 'tests-unit/import/import-reference-issues/comments-2991.less',
    input:
      '.referenced {\n\t// This file should not output anything if referenced.\n    @media (hover) {\n        // This file should not output anything if referenced.\n    }\n\t// This file should not output anything if referenced.\n    @media (hover) {\n\t\t// This file should not output anything if referenced.\n    }\n\t// This file should not output anything if referenced.\n    @media (hover) {\n        /* This file should not output anything if referenced. */\n    }\n\t// This file should not output anything if referenced.\n    @media (hover) {\n        color: #000000;\n    }\n}\n// This file should not output anything if referenced.\n@media (hover) {\n\t// This file should not output anything if referenced.\n}\n@media (hover) {\n\t/* This file should not output anything if referenced. */\n}\n',
  },
  {
    name: 'tests-unit/import/import-reference-issues/global-scope-import.less',
    input:
      '.theOnlySelector {\n  avoid: warning;\n}\n.unusedAndReference:extend(.theOnlySelector) {\n    unused-and: reference;\n}\n\n@import (reference) "global-scope-nested.less";\n\n.test-rule-b {\n  background-color: green;\n  &:extend(.test-rule-a all);\n}\n',
  },
  {
    name: 'tests-unit/import/import-reference-issues/global-scope-nested.less',
    input: '.test-rule-a {\n  color: red;\n}\n',
  },
  {
    name: 'tests-unit/import/import-reference-issues/mixin-1968.less',
    input:
      '.mixin-no-parent-selector() {\n  background-color: red;\n}\n.mixin-with-parent-selector() {\n  &:first-child{ //  USING AN & SELECTOR HERE\n    background-color: blue;\n }\n}\n',
  },
  {
    name: 'tests-unit/import/import-reference-issues/multiple-import-nested.less',
    input:
      '/* double nested file */\nshould {\n  be: invisible;\n}\n/* do not extend outside of this */\n.something {\n  invisible: suppress warning;\n}\n.invisible {\n &:extend(.something all);\n}\n\n',
  },
  {
    name: 'tests-unit/import/import-reference-issues/multiple-import.less',
    input:
      '/*\n  tralala\n*/\n.fix {\n  fix: fix;\n}\n.something {\n  @import (reference) "multiple-import-nested.less";\n  inside: something;\n}\n',
  },
  {
    name: 'tests-unit/import/import-reference-issues/simple-ruleset-2162.less',
    input: 'ruleset {\n  shall-be-invisible: less;\n}\n',
  },
  {
    name: 'tests-unit/import/import/css-import.less',
    input: '@import url("test.css");\n',
  },
  {
    name: 'tests-unit/import/import/import-and-relative-paths-test.less',
    input:
      '@import "css/background.css";\n@import "import-test-d.css";\n\n@import "imports/logo";\n@import "imports/font";\n\n.unquoted-relative-path-bg() {\n    background-image: url(../../data/image.jpg);\n}\n.quoted-relative-path-border-image() {\n    border-image: url(\'../../data/image.jpg\');\n}\n\n#imported-relative-path {\n    .unquoted-relative-path-bg();\n    .quoted-relative-path-border-image();\n}',
  },
  {
    name: 'tests-unit/import/import/import-charset-test.less',
    input: '@charset "ISO-8859-1";',
  },
  {
    name: 'tests-unit/import/import/import-inline-invalid-css.less',
    input: '@import (inline) "invalid-css.less";',
  },
  {
    name: 'tests-unit/import/import/import-interpolation.less',
    input:
      '@import (inline) "imports/logo.less";\n@import "import-@{in}@{terpolation}2.less";',
  },
  {
    name: 'tests-unit/import/import/import-interpolation2.less',
    input: '.a {\n  var: test;\n}\n\n@in: "redefined-does-nothing";',
  },
  {
    name: 'tests-unit/import/import/import-once-test-c.less',
    input: '\n@c: red;\n\n#import {\n  color: @c;\n}\n',
  },
  {
    name: 'tests-unit/import/import/import-reference.less',
    input:
      '.z {\n  color: red;\n  .c {\n    color: green;\n  }\n}\n.only-with-visible,\n.z {\n  color: green;\n  &:hover {\n    color: green;\n  }\n  & {\n    color: green;\n  }\n  & + & {\n    color: green;\n    .sub {\n      color: green;\n    }\n  }\n}\n\n& {\n  .hidden {\n    hidden: true;\n  }\n}\n\n@media tv {\n  .hidden {\n    hidden: true;\n  }\n}\n\n/* comment is not output */\n\n.zz {\n  .y {\n    pulled-in: yes /* inline comment survives */;\n  }\n  /* comment pulled in */\n}\n@max-size: 450px;\n.mixin-with-mediaq(@num) {\n  color: green;\n  test: @num;\n  @media (max-size: @max-size) {\n    color: red;\n  }\n}\n//https://github.com/less/less.js/issues/2359\n@supports (something: else) {\n  .class {\n    something: else;\n  }\n  .nestedToo {\n    .class {\n      something: else;\n    }\n  }\n  .invisible {\n    something: else;\n  }\n}\n//https://github.com/less/less.js/issues/1979\n.mixin-with-nested-selectors() {\n  .test-rule {\n    color: red;\n    &:first-child {\n      color: blue;\n    }\n  }\n}\n.mixin-with-directives(@keyframeName) {\n  @keyframes @keyframeName {\n    @rules1();\n  }\n  @supports (animation-name: test) {\n    @keyframes @keyframeName {\n      @rules2();\n    }\n    .selector {\n      color: red;\n    }\n  }\n  @rules1: {property: value;};\n  @rules2: {property: value;};\n}\n\n@import (inline, multiple) "invalid-css.less";\n@import "import-inline-invalid-css.less";\n.print-referenced-import-inline() {\n  div {\n    @import (inline, multiple) "invalid-css.less";\n  }\n  @import (inline, multiple) "invalid-css.less";\n}',
  },
  {
    name: 'tests-unit/import/import/import-test-a.less',
    input:
      '@import "import-test-b.less";\n@import url(import-test-f.less);\n@import url("deeper/url-import.less");\n@a: 20%;\n@import "urls.less";',
  },
  {
    name: 'tests-unit/import/import/import-test-b.less',
    input:
      '@import "import-test-c";\n\n@b: 100%;\n\n.mixin {\n  height: 10px;\n  color: @c;\n}\n',
  },
  {
    name: 'tests-unit/import/import/import-test-c.less',
    input: '\n@c: red;\n\n#import {\n  color: @c;\n}\n',
  },
  {
    name: 'tests-unit/import/import/import-test-e.less',
    input: '\nbody { width: 100% }\n',
  },
  {
    name: 'tests-unit/import/import/import-test-f.less',
    input: '@import "import-test-e";\n\n.test-rule-f {\n  height: 10px;\n}\n',
  },
  {
    name: 'tests-unit/import/import/interpolation-vars.less',
    input:
      '@in: "in";\n@terpolation: "terpolation";\n\n// should be ignored because its already imported\n// and it uses a variable from the parent scope\n@import "import-@{my_theme}-e.less";\n',
  },
  {
    name: 'tests-unit/import/import/invalid-css.less',
    input: "this isn't very valid CSS.",
  },
  {
    name: 'tests-unit/import/import/layer-import.less',
    input: '.sub-rule {\n    ul {\n        color: white;\n    }\n}\n',
  },
  {
    name: 'tests-unit/import/import/urls.less',
    input: '// empty file showing that it loads from the relative path first\n',
  },
  {
    name: 'tests-unit/import/import/json/index.less',
    input: '@import "../import-test-a";',
  },
  {
    name: 'tests-unit/import/import/imports/font.less',
    input:
      "@font-face {\n    font-family: xecret;\n    src: url('../assets/xecret.ttf');\n}\n\n#secret {\n    font-family: xecret, sans-serif;\n}\n",
  },
  {
    name: 'tests-unit/import/import/imports/logo.less',
    input:
      '#logo {\n  width: 100px;\n  height: 100px;\n  background: url(\'./assets/logo.png\');\n  background: url("#inline-svg");\n}\n',
  },
  {
    name: 'tests-unit/import/import/deeper/import-once-test-a.less',
    input: '@import "../import-once-test-c";',
  },
  {
    name: 'tests-unit/import/import/deeper/url-import.less',
    input: '@import url("deeper-2/url-import.less");',
  },
  {
    name: 'tests-unit/import/import/deeper/deeper-2/url-import-2.less',
    input: '.deep-import-url {\n  color: red;\n}',
  },
  {
    name: 'tests-unit/import/import/deeper/deeper-2/url-import.less',
    input: '@import url("url-import-2.less");',
  },
  {
    name: 'tests-unit/impor/impor.less',
    input:
      '// https://github.com/less/less.js/issues/3660\n// const dir = parserInput.$re(/^@import?\\s+/);\n// correct regexp is /^@import\\s+/\n// so follow code will change nothing, parse result is same with raw less code\n@impor "impor-typo-dont-parse-as-@import.less";\n',
  },
  {
    name: 'tests-unit/ie-filters/ie-filters.less',
    input:
      '@fat: 0;\n@cloudhead: "#000000";\n\n.nav {\n  filter: progid:DXImageTransform.Microsoft.Alpha(opacity = 20);\n  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=@fat);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#333333", endColorstr=@cloudhead, GradientType=@fat);\n}\n.evalTest(@arg) {\n  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=@arg);\n}\n.evalTest1 {\n  .evalTest(30);\n  .evalTest(5);\n}\n\n\n',
  },
  {
    name: 'tests-unit/functions-each/functions-each.less',
    input:
      "@selectors: blue, green, red;\n@list: a b c d;\n\neach(@selectors, {\n  .sel-@{value} {\n    a: b;\n  }\n});\n\n.each {\n  each(@list, {\n    index+: @index;\n    item@{index}: @value;\n  });\n\n  // nested each\n  each(10px 15px, 20px 25px; { \n    // demonstrates nesting of each()\n    each(@value; #(@v, @k, @i) {\n      nest-@{i}-@{index}: @v @k;\n    });\n  });\n\n  // nested anonymous mixin\n  .nest-anon {\n    each(a b, .(@v;@i) {\n      each(c d, .(@vv;@ii) {\n        nest-@{i}-@{ii}: @v @vv;\n      });\n    });\n  }\n\n  // vector math\n  each(1 2 3 4, {\n    padding+_: (@value * 10px);\n  });\n}\n\n@set: {\n  one: blue;\n  // skip comments\n  two: green;\n  /** and these\n  */\n  three: red; //and this\n}\n.set {\n  each(@set, {\n    @{key}: @value;\n  });\n}\n.set-2() {\n  one: blue;\n  two: green;\n  three: red;\n}\n.set-2 {\n  each(.set-2(), .(@v, @k, @i) {\n    @{k}-@{i}: @v;\n  });\n}\n\n.pick(@a) when (@a = 4) {\n  val3: @a;\n}\n.single {\n  each(true, {\n    val: @value;\n  });\n  @exp: 1 + 1;\n  each(@exp, {\n    val2: @value;\n  });\n  each(1 2 3 4, {\n    .pick(@value);\n  });\n}\n\n@columns: range(4);\n.column-list {\n  list: @columns;\n}\n\neach(@columns, .(@val) {\n  .col-@{val} {\n    width: (100% / length(@columns));\n  }\n});\n\neach(range(10px, 30px, 10px), .(@val, @index) {\n  .row-@{index} {\n    width: @val;\n  }\n});\n\n@list: a b c d;\n.box {\n  each(@list, {\n    -less-log: extract(@list, @index);\n  })\n}\n\n// https://github.com/less/less.js/issues/3325\n\n@color-schemes: {\n  @primary: {\n    @color: blue;\n  }\n  @secondary: {\n    @color: red;\n  }\n}\n.test-rule {\n  each(primary secondary, .(@color-name) {\n    @scheme: @color-schemes[@@color-name]; // e.g. @color-name = primary\n    color: @scheme[@color];\n  });\n}\n\n@one: {\n  @two: {\n    foo: red;\n    bar: blue;\n  };\n};\n\neach(@one[@two], {\n  .@{key} {\n    content: @value;\n  }\n});\n\n// https://github.com/less/less.js/issues/3354\n.log(@msgs) {\n  each(@msgs; {\n    content: @value;\n  });\n}\n\n@messages: 'foo', 'bar';\n\nspan {\n  .log(@messages);\n}\n\ndiv {\n  .log('foo');\n}\n\n// https://github.com/less/less.js/issues/3345\n.mixin-create-width-style() {\n  @list: e(\"90 100 110\");\n\n  each(@list, {\n      .w-@{key} {\n          width: @value;\n      }\n  })\n}\n\n.a {\n  .mixin-create-width-style();\n}\n\n\n",
  },
  {
    name: 'tests-unit/functions/functions.less',
    input:
      '#functions {\n  @var: 10;\n  @colors: #000, #fff;\n  color: _color("evil red"); // #660000\n  width: increment(15);\n  height: undefined("self");\n  border-width: add(2, 3);\n  variable: increment(@var);\n  background: linear-gradient(@colors);\n}\n\n#built-in {\n  @r: 32;\n  escaped: e("-Some::weird(#thing, y)");\n  lighten: lighten(#ff0000, 40%);\n  lighten-relative: lighten(#ff0000, 40%, relative);\n  darken: darken(#ff0000, 40%);\n  darken-relative: darken(#ff0000, 40%, relative);\n  saturate: saturate(#29332f, 20%);\n  saturate-relative: saturate(#29332f, 20%, relative);\n  desaturate: desaturate(#203c31, 20%);\n  desaturate-relative: desaturate(#203c31, 20%, relative);\n  greyscale: greyscale(#203c31);\n  hsl-clamp: hsl(380, 150%, 150%);\n  spin-p: spin(hsl(340, 50%, 50%), 40);\n  spin-n: spin(hsl(30, 50%, 50%), -40);\n  luma-white: luma(#fff);\n  luma-black: luma(#000);\n  luma-black-alpha: luma(rgba(0,0,0,0.5));\n  luma-red: luma(#ff0000);\n  luma-green: luma(#00ff00);\n  luma-blue: luma(#0000ff);\n  luma-yellow: luma(#ffff00);\n  luma-cyan: luma(#00ffff);\n  luma-differs-from-luminance: luma(#ff3600);\n  luminance-white: luma(#fff);\n  luminance-black: luma(#000);\n  luminance-black-alpha: luma(rgba(0,0,0,0.5));\n  luminance-red: luma(#ff0000);\n  luminance-differs-from-luma: luminance(#ff3600);\n  contrast-filter: contrast(30%);\n  saturate-filter: saturate(5%);\n  contrast-white: contrast(#fff);\n  contrast-black: contrast(#000);\n  contrast-red: contrast(#ff0000);\n  contrast-green: contrast(#00ff00);\n  contrast-blue: contrast(#0000ff);\n  contrast-yellow: contrast(#ffff00);\n  contrast-cyan: contrast(#00ffff);\n  contrast-light: contrast(#fff, #111111, #eeeeee);\n  contrast-dark: contrast(#000, #111111, #eeeeee);\n  contrast-wrongorder: contrast(#fff, #eeeeee, #111111, 0.5);\n  contrast-light-thresh: contrast(#fff, #111111, #eeeeee, 0.5);\n  contrast-dark-thresh: contrast(#000, #111111, #eeeeee, 0.5);\n  contrast-high-thresh: contrast(#555, #111111, #eeeeee, 0.6);\n  contrast-low-thresh: contrast(#555, #111111, #eeeeee, 0.09);\n  contrast-light-thresh-per: contrast(#fff, #111111, #eeeeee, 50%);\n  contrast-dark-thresh-per: contrast(#000, #111111, #eeeeee, 50%);\n  contrast-high-thresh-per: contrast(#555, #111111, #eeeeee, 60%);\n  contrast-low-thresh-per: contrast(#555, #111111, #eeeeee, 9%);\n  replace: replace("Hello, Mars.", "Mars\\.", "World!");\n  replace-captured: replace("This is a string.", "(string)\\.$", "new $1.");\n  replace-with-flags: replace("One + one = 4", "one", "2", "gi");\n  replace-single-quoted: replace(\'foo-1\', "1", "2");\n  replace-escaped-string: replace(~"bar-1", "1", "2");\n  replace-keyword: replace(baz-1, "1", "2");\n  replace-with-color: replace("007", "0", #135, g);\n  replace-with-number: replace("007", "0", 2em);\n  format: %("rgb(%d, %d, %d)", @r, 128, 64);\n  format-string: %("hello %s", "world");\n  format-multiple: %("hello %s %d", "earth", 2);\n  format-url-encode: %("red is %A", #ff0000);\n  format-single-quoted: %(\'hello %s\', "single world");\n  format-escaped-string: %(~"hello %s", "escaped world");\n  format-color-as-string: %("%s", #123);\n  format-number-as-string: %("%s", 4px);\n  eformat: e(%("rgb(%d, %d, %d)", @r, 128, 64));\n\n  unitless: unit(12px);\n  unit: unit((13px + 1px), em);\n  unitpercentage: unit(100, %);\n\n  get-unit: get-unit(10px);\n  get-unit-empty: get-unit(10);\n\n  hue: hue(hsl(98, 12%, 95%));\n  saturation: saturation(hsl(98, 12%, 95%));\n  lightness: lightness(hsl(98, 12%, 95%));\n  hsvhue: hsvhue(hsv(98, 12%, 95%));\n  hsvsaturation: hsvsaturation(hsv(98, 12%, 95%));\n  hsvvalue: hsvvalue(hsv(98, 12%, 95%));\n  red: red(#f00);\n  green: green(#0f0);\n  blue: blue(#00f);\n  rounded: round((@r/3));\n  rounded-two: round((@r/3), 2);\n  roundedpx: round((10px / 3));\n  roundedpx-three: round((10px / 3), 3);\n  rounded-percentage: round(10.2%);\n  ceil: ceil(10.1px);\n  floor: floor(12.9px);\n  sqrt: sqrt(25px);\n  pi: pi();\n  mod: mod(13m, 11cm); // could take into account units, doesn\'t at the moment\n  abs: abs(-4%);\n  tan: tan(42deg);\n  sin: sin(10deg);\n  cos: cos(12);\n  atan: atan(tan(0.1rad));\n  atan: convert(acos(cos(34deg)), deg);\n  atan: convert(acos(cos(50grad)), deg);\n  pow: pow(8px, 2);\n  pow: pow(4, 3);\n  pow: pow(3, 3em);\n  min: min(0);\n  min: min(6, 5);\n  min: min(1pt, 3pt);\n  min: min(1cm, 3mm);\n  min: min(6em, 5, 4ex, 3, 2pt, 1);\n  min: min(calc(1 + 1), 1);\n  min: min(~\'var(--width), 802px\');\n  max: max(1, 3);\n  max: max(3em, 1em, 2em, 5em);\n  max: max(1px, 2, 3em, 4, 5m, 6);\n  max: min(var(--body-max-width), calc(100vw - 20px));\n  max: max(1, calc(1 + 1));\n  max-native: max(10vw, 100px);\n  percentage: percentage((10px / 50));\n  color-quoted-digit: color("#dda0dd");\n  color-quoted-keyword: color("plum");\n  color-color: color(#dda0dd);\n  color-keyword: color(plum);\n  tint: tint(#777777, 13);\n  tint-full: tint(#777777, 100);\n  tint-percent: tint(#777777, 13%);\n  tint-negative: tint(#777777, -13%);\n  shade: shade(#777777, 13);\n  shade-full: shade(#777777, 100);\n  shade-percent: shade(#777777, 13%);\n  shade-negative: shade(#777777, -13%);\n\n  fade-out: fadeout(red, 5%); // support fadeOut and fadeout\n  fade-in: fadein(fadeout(red, 10%), 5%);\n  fade-out-relative: fadeout(red, 5%,relative);\n  fade-in-relative: fadein(fadeout(red, 10%, relative), 5%, relative);\n  fade-out2:  fadeout(fadeout(red, 50%), 50%);\n  fade-out2-relative: fadeout(fadeout(red, 50%, relative), 50%, relative);\n\n  hsv: hsv(5, 50%, 30%);\n  hsva: hsva(3, 50%, 30%, 0.2);\n\n  mix: mix(#ff0000, #ffff00, 80);\n  mix-0: mix(#ff0000, #ffff00, 0);\n  mix-100: mix(#ff0000, #ffff00, 100);\n  mix-weightless: mix(#ff0000, #ffff00);\n  mixt: mix(#ff0000, transparent);\n\n  .is-a {\n    @rules: {\n      color: red;\n    };\n    rules-defined: isdefined(@rules);\n    foo-defined: isdefined(@foo);\n    ruleset: isruleset(@rules);\n    color: iscolor(#ddd);\n    color1: iscolor(red);\n    color2: iscolor(rgb(0, 0, 0));\n    color3: iscolor(transparent);\n    keyword: iskeyword(hello);\n    number: isnumber(32);\n    string: isstring("hello");\n    pixel: ispixel(32px);\n    percent: ispercentage(32%);\n    em: isem(32em);\n    ex: isunit(32ex, ex);\n    rem: isunit(32rem, rem);\n    vw: isunit(32vw, vw);\n    vh: isunit(32vh, vh);\n    vmin: isunit(32vmin, vmin);\n    vmax: isunit(32vmax, vmax);\n    ch: isunit(32ch, ch);\n    cm: isunit(32cm, cm);\n    mm: isunit(32mm, mm);\n    pt: isunit(32pt, pt);\n    q: isunit(32q, q);\n    in: isunit(32in, in);\n    cat: isunit(32cat, cat);\n    no-unit-is-empty: isunit(32, \'\');\n    case-insensitive-1: isunit(32CAT, cat);\n    case-insensitive-2: isunit(32px, PX);\n  }\n}\n\n#alpha {\n  alpha: darken(hsla(25, 50%, 50%, 0.6), 10%);\n  alpha2: alpha(rgba(3, 4, 5, 0.5));\n  alpha3: alpha(transparent);\n}\n\n#blendmodes {\n  multiply: multiply(#f60000, #f60000);\n  screen: screen(#f60000, #0000f6);\n  overlay: overlay(#f60000, #0000f6);\n  softlight: softlight(#f60000, #ffffff);\n  hardlight: hardlight(#f60000, #0000f6);\n  difference: difference(#f60000, #0000f6);\n  exclusion: exclusion(#f60000, #0000f6);\n  average: average(#f60000, #0000f6);\n  negation: negation(#f60000, #313131);\n}\n\n#extract-and-length {\n  @anon: A B C 1 2 3;\n  extract: extract(@anon, 6) extract(@anon, 5) extract(@anon, 4) extract(@anon, 3) extract(@anon, 2) extract(@anon, 1);\n  length: length(@anon);\n}\n\n#quoted-functions-in-mixin {\n  // Quoted type may have some weird side-effects when used in mixins (#2308)\n  .mixin();\n  .mixin() {\n    replace-double-quoted: replace(\'foo-1\', "1", "2");\n    replace-single-quoted: replace(\'foo-3\', "3", "4");\n    replace-escaped-string: replace(~"bar-1", "1", "2");\n    replace-keyword: replace(baz-1, "1", "2");\n    replace-anonymous: replace(e("qux-1"), "1", "2");\n    format-double-quoted: %("hello %s", "world");\n    format-single-quoted: %(\'hello %s\', "single world");\n    format-escaped-string: %(~"hello %s", "escaped world");\n    format-keyword: %(hello);\n    format-anonymous: %(e("hello %s"), "anonymous world");\n  }\n}\n\n#list-details {\n  @list:\n    a 1, // Some comment\n    b 2;\n\n  length: length(@list);\n  one: extract(@list, 1);\n  @two: extract(@list, 2);\n  two: @two;\n  two-length: length(@two);\n  two-one: extract(@two, 1);\n  two-two: extract(@two, 2);\n}\n@color1: #FFF;/* comment1 */\n@color2: #FFF/* comment2 */;\nhtml {\n  color: mix(blue, @color1, 50%);\n  color: mix(blue, @color2, 50%);\n}\n\n#boolean {\n  a: boolean(not(2 < 1));\n  b: boolean(not(2 > 1) and (true));\n  c: boolean(not(boolean(true)));\n  // not without parentheses (should behave the same as with parentheses)\n  d: boolean(not false);\n  e: boolean(not true);\n}\n\n#if {\n  a: if(not(false), 1, 2);\n  b: if(not(true), 1, 2);\n  @1: if(not(false), {c: 3}, {d: 4}); @1();\n\n  --e: if(not(true), 5);\n  @f: boolean(3 = 4);\n  f: if(not(@f), 6);\n  g: if(true, 3, 5);\n  h: if(false, 3, 5);\n  i: if(true and isnumber(6), 6, 8);\n  j: if(not(true) and true, 6, 8);\n  k: if(true or true, 1);\n  // not without parentheses\n  m: if(not false, 1, 2);\n  n: if(not true, 1, 2);\n\n  // see: https://github.com/less/less.js/issues/3371\n  @some: foo;\n  l: if((iscolor(@some)), darken(@some, 10%), black);\n\n\n  if((false), {g: 7}); /* results in void */\n\n  @conditional: if((true), {\n    color: green;\n  }, {});\n  @conditional();\n\n  @falsey: if((false), {\n    color: orange;\n  }, {\n    color: purple;\n  });\n  @falsey();\n}\n\n.paren-escapes {\n  list-1: ~(1, 2, 3);\n  length-1: length($list-1);\n  each(~(1 2 3); {\n    item-@{value}: @value + 3;\n  })\n\n  .mixin(@list-1; @list-2) {\n    list-2: @list-1;\n    list-3: @list-2;\n  }\n  .mixin($list-1, ~(7; 8; 9));\n}\n',
  },
  {
    name: 'tests-unit/extract-and-length/extract-and-length.less',
    input:
      '// test late parsing\n@cols: 1, 2;\n\n.a(@i: length(@cols)) when (@i > 0) {\n  @divider: e(extract(@cols, @i));\n}\n.a();\n\n.b(@j: 1) when (@j < length(@cols)) {\n  @divider: e(extract(@cols, @j));\n}\n.b();\n\n// simple array/list:\n\n.multiunit {\n  @v: abc "abc" 1 1px 1% #123;\n  length: length(@v);\n  extract: extract(@v, 1) extract(@v, 2) extract(@v, 3) extract(@v, 4) extract(@v, 5) extract(@v, 6);\n}\n\n.incorrect-index {\n    @v1: a  b  c;\n    @v2: a, b, c;\n    v1: extract(@v1,  5);\n    v2: extract(@v2, -2);\n}\n\n.scalar {\n    @var:          variable;\n    var-value:     extract(@var, 1);\n    var-length:    length(@var);\n    ill-index:     extract(@var, 2);\n\n    name-value:    extract(name, 1);\n    string-value:  extract("string", 1);\n    number-value:  extract(12345678, 1);\n    color-value:   extract(blue, 1);\n    rgba-value:    extract(rgba(80, 160, 240, 0.67), 1);\n    --empty-value:   extract(~\'\', 1);\n\n    name-length:   length(name);\n    string-length: length("string");\n    number-length: length(12345678);\n    color-length:  length(blue);\n    rgba-length:   length(rgba(80, 160, 240, 0.67));\n    empty-length:  length(~\'\');\n}\n\n.mixin-arguments {\n    .mixin-args(a b c d);\n    .mixin-args(a, b, c, d);\n    .mixin-args(1; 2; 3; 4);\n}\n\n.mixin-args(@value) {\n    &-1 {\n        length:  length(@value);\n        extract: extract(@value, 3) ~"|" extract(@value, 2) ~"|" extract(@value, 1);\n    }\n}\n\n.mixin-args(...) {\n    &-2 {\n        length:  length(@arguments);\n        extract: extract(@arguments, 3) ~"|" extract(@arguments, 2) ~"|" extract(@arguments, 1);\n    }\n}\n\n.mixin-args(@values...) {\n    &-3 {\n        length:  length(@values);\n        extract: extract(@values, 3) ~"|" extract(@values, 2) ~"|" extract(@values, 1);\n    }\n}\n\n.mixin-args(@head, @tail...) {\n    &-4 {\n        length:  length(@tail);\n        extract: extract(@tail, 2) ~"|" extract(@tail, 1);\n    }\n}\n\n// "multidimensional" array/list\n\n.md-space-comma {\n    @v: a b c, 1 2 3, "x" "y" "z";\n    length-1:  length(@v);\n    extract-1: extract(@v, 2);\n    length-2:  length(extract(@v, 2));\n    extract-2: extract(extract(@v, 2), 2);\n\n    &-as-args {.mixin-args(a b c, 1 2 3, "x" "y" "z")}\n}\n\n.md-cat-space-comma {\n    @a: a b c;\n    @b: 1 2 3;\n    @c: "x" "y" "z";\n    @v: @a, @b, @c;\n    length-1:  length(@v);\n    extract-1: extract(@v, 2);\n    length-2:  length(extract(@v, 2));\n    extract-2: extract(extract(@v, 2), 2);\n\n    &-as-args {.mixin-args(@a, @b, @c)}\n}\n\n.md-cat-comma-space {\n    @a: a, b, c;\n    @b: 1, 2, 3;\n    @c: "x", "y", "z";\n    @v: @a @b @c;\n    length-1:  length(@v);\n    extract-1: extract(@v, 2);\n    length-2:  length(extract(@v, 2));\n    extract-2: extract(extract(@v, 2), 2);\n\n    &-as-args {.mixin-args(@a @b @c)}\n}\n\n.md-3D {\n    @a: a b c d, 1 2 3 4;\n    @b: 5 6 7 8, e f g h;\n    .3D(@a, @b);\n\n    .3D(...) {\n\n        @v1:       @arguments;\n        length-1:  length(@v1);\n        extract-1: extract(@v1, 1);\n\n        @v2:       extract(@v1, 2);\n        length-2:  length(@v2);\n        extract-2: extract(@v2, 1);\n\n        @v3:       extract(@v2, 1);\n        length-3:  length(@v3);\n        extract-3: extract(@v3, 3);\n\n        @v4:       extract(@v3, 4);\n        length-4:  length(@v4);\n        extract-4: extract(@v4, 1);\n    }\n}\n\n\n',
  },
  {
    name: 'tests-unit/extend-selector/extend-selector.less',
    input:
      '.error {\n  border: 1px #f00;\n  background: #fdd;\n}\n.error.intrusion {\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.intrusion .error {\n  display: none;\n}\n.badError:extend(.error all) {\n  border-width: 3px;\n}\n\n.foo .bar, .foo .baz {\n    display: none;\n}\n\n.ext1 .ext2\n    :extend(.foo all) {\n}\n\n.ext3:extend(.foo all),\n.ext4:extend(.foo all) {\n}\n\ndiv.ext5,\n.ext6 > .ext5 {\n    width: 100px;\n}\n\n.should-not-exist-in-output,\n.ext7:extend(.ext5 all) {\n}\n\n.ext {\n  test: 1;\n}\n// same as\n// .a .c:extend(.ext all)\n// .b .c:extend(.ext all)\n// .a .c .d\n// .b .c .d\n.a, .b {\n  test: 2;\n  .c:extend(.ext all) {\n    test: 3;\n    .d {\n      test: 4;\n    }\n  }\n}\n\n.replace.replace,\n.c.replace + .replace {\n  .replace,\n  .c {\n    prop: copy-paste-replace;\n  }\n}\n.rep_ace:extend(.replace all) {}\n\n.attributes {\n  [data="test"] {\n    extend: attributes;\n  }\n  .attribute-test {\n    &:extend([data="test"] all);\n  }\n  [data] {\n    extend: attributes2;\n  }\n  .attribute-test2 {\n    &:extend([data] all); //you could argue it should match [data="test"]... not for now though...\n  }\n  @attr-data: "test3";\n  [data=@{attr-data}] {\n    extend: attributes2;\n  }\n  .attribute-test {\n    &:extend([data="test3"] all);\n  }\n}\n\n.header {\n  .header-nav {\n    background: red;\n    &:before {\n      background: blue;\n    }\n  }\n}\n\n.footer {\n  .footer-nav {\n    &:extend( .header .header-nav all );\n  }\n}\n\n.issue-2586-bordered {\n    border: solid 1px black;\n}\n.issue-2586-somepage {\n    .content:extend(.issue-2586-bordered) {\n        &>span {\n            margin-bottom: 10px;\n        }\n    }\n}\n\n',
  },
  {
    name: 'tests-unit/extend-nest/extend-nest.less',
    input:
      '.sidebar {\n  width: 300px;\n  background: red;\n\n  .box {\n    background: #FFF;\n    border: 1px solid #000;\n    margin: 10px 0;\n  }\n}\n\n.sidebar2 {\n  &:extend(.sidebar all);\n  background: blue;\n}\n\n.type1 {\n    .sidebar3 {\n      &:extend(.sidebar all);\n      background: green;\n    }\n}\n\n.type2 {\n  &.sidebar4 {\n    &:extend(.sidebar all);\n    background: red;\n  }\n}\n\n.button {\n  color: black;\n  &:hover {\n    color: inherit;\n  }\n}\n.submit {\n  &:extend(.button);\n  &:hover:extend(.button:hover) {}\n}\n\n.nomatch {\n  &:hover:extend(.button :hover) {}\n}\n\n.button2 {\n  :hover {\n    nested: white;\n  }\n}\n.button2 :hover {\n  notnested: black;\n}\n\n.nomatch :extend(.button2:hover) {}\n\n.amp-test-a,\n.amp-test-b {\n  .amp-test-c &.amp-test-d&.amp-test-e {\n    .amp-test-f&+&.amp-test-g:extend(.amp-test-h) {}\n  }\n}\n.amp-test-h {\n  test: extended by masses of selectors;\n}\n\n',
  },
  {
    name: 'tests-unit/extend-media/extend-media.less',
    input:
      '.ext1 .ext2 {\n  background: black;\n}\n\n@media (tv) {\n  .ext1 .ext3 {\n    color: inherit;\n  }\n  .tv-lowres :extend(.ext1 all) {\n    background: blue;\n  }\n  @media (hires) {\n    .ext1 .ext4 {\n      color: green;\n    }\n    .tv-hires :extend(.ext1 all) {\n      background: red;\n    }\n  }\n}\n\n.all:extend(.ext1 all) {\n\n}\n\n',
  },
  {
    name: 'tests-unit/extend-exact/extend-exact.less',
    input:
      '.replace.replace,\n.c.replace + .replace {\n  .replace,\n  .c {\n    prop: copy-paste-replace;\n  }\n}\n.rep_ace:extend(.replace.replace .replace) {}\n\n.a .b .c {\n  prop: not_effected;\n}\n\n.a {\n  prop: is_effected;\n  .b {\n    prop: not_effected;\n  }\n  .b.c {\n    prop: not_effected;\n  }\n}\n\n.c, .a {\n  .b, .a {\n    .a, .c {\n      prop: not_effected;\n    }\n  }\n}\n\n.effected {\n  &:extend(.a);\n  &:extend(.b);\n  &:extend(.c);\n}\n\n.e {\n  && {\n    prop: extend-double;\n    &:hover {\n      hover: not-extended;\n    }\n  }\n}\n.dbl:extend(.e.e) {}\n\n',
  },
  {
    name: 'tests-unit/extend-clearfix/extend-clearfix.less',
    input:
      ".clearfix {\n  *zoom: 1;\n  &:after {\n    content: '';\n    display: block;\n    clear: both;\n    height: 0;\n  }\n}\n\n.foo {\n  &:extend(.clearfix all);\n  color: red;\n}\n\n.bar {\n  &:extend(.clearfix all);\n  color: blue;\n}\n\n",
  },
  {
    name: 'tests-unit/extend-chaining/extend-chaining.less',
    input:
      "//very simple chaining\n.a {\n  color: black;\n}\n.b:extend(.a) {}\n.c:extend(.b) {}\n\n//very simple chaining, ordering not important\n\n.d:extend(.e) {}\n.e:extend(.f) {}\n.f {\n  color: black;\n}\n\n//extend with all\n\n.g.h {\n  color: black;\n}\n.i.j:extend(.g all) {\n  color: inherit;\n}\n.k:extend(.i all) {}\n\n//extend multi-chaining\n\n.l {\n  color: black;\n}\n.m:extend(.l){}\n.n:extend(.m){}\n.o:extend(.n){}\n.p:extend(.o){}\n.q:extend(.p){}\n.r:extend(.q){}\n.s:extend(.r){}\n.t:extend(.s){}\n\n// self referencing is ignored\n\n.u {color: black;}\n.v.u.v:extend(.u all){}\n\n// circular reference because the new extend product will match the existing extend\n\n.w:extend(.w) {color: black;}\n.v.w.v:extend(.w all){}\n\n// classic circular references\n\n.x:extend(.z) {\n  color: x;\n}\n.y:extend(.x) {\n  color: y;\n}\n.z:extend(.y) {\n  color: z;\n}\n\n//very simple chaining, but with the extend inside the ruleset\n.va {\n  color: black;\n}\n.vb {\n  &:extend(.va);\n  color: inherit;\n}\n.vc {\n  &:extend(.vb);\n}\n\n// media queries - don't extend outside, do extend inside\n\n@media (tv) {\n  .ma:extend(.a,.b,.c,.d,.e,.f,.g,.h,.i,.j,.k,.l,.m,.n,.o,.p,.q,.r,.s,.t,.u,.v,.w,.x,.y,.z,.md) {\n    color: black;\n  }\n  .md {\n    color: inherit;\n  }\n  @media (plasma) {\n    .me, .mf {\n      &:extend(.mb,.md);\n      background: red;\n    }\n  }\n}\n.mb:extend(.ma) {};\n.mc:extend(.mb) {};\n\n",
  },
  {
    name: 'tests-unit/extend/extend-clearfix.less',
    input:
      ".clearfix {\n  *zoom: 1;\n  &:after {\n    content: '';\n    display: block;\n    clear: both;\n    height: 0;\n  }\n}\n\n.foo {\n  &:extend(.clearfix all);\n  color: red;\n}\n\n.bar {\n  &:extend(.clearfix all);\n  color: blue;\n}\n",
  },
  {
    name: 'tests-unit/extend/extend.less',
    input:
      '// Extend functionality tests\n.error {\n  border: 1px #f00;\n  background: #fdd;\n}\n.error.intrusion {\n  font-size: 1.3em;\n  font-weight: bold;\n}\n.intrusion .error {\n  display: none;\n}\n.badError {\n  &:extend(.error all);\n  border-width: 3px;\n}\n\n.foo .bar, .foo .baz {\n    display: none;\n}\n\n.ext1 .ext2 {\n    &:extend(.foo all);\n}\n\n.ext3,\n.ext4 {\n  &:extend(.foo all);\n  &:extend(.bar all);\n}\n\ndiv.ext5,\n.ext6 > .ext5 {\n    width: 100px;\n}\n\n.ext7 {\n    &:extend(.ext5 all);\n}\n\n.ext8.ext9 {\n  result: add-foo;\n}\n.ext8 .ext9,\n.ext8 + .ext9,\n.ext8 > .ext9 {\n  result: bar-matched;\n}\n.ext8.nomatch {\n  result: none;\n}\n.ext8 {\n  .ext9 {\n    result: match-nested-bar;\n  }\n}\n.ext8 {\n  &.ext9 {\n    result: match-nested-foo;\n  }\n}\n\n.fuu:extend( .ext8.ext9 all) {}\n.buu:extend(.ext8 .ext9 all) {}\n.zap:extend(.ext8 + .ext9 all) {}\n.zoo:extend(.ext8 > .ext9 all) {}\n\n.aa {\n  color: black;\n  .dd {\n    background: red;\n  }\n}\n.bb {\n  background: red;\n  .bb {\n    color: black;\n  }\n}\n.cc:extend(.aa,.bb) {}\n.ee:extend(.dd all,.bb) {}\n.ff:extend(.dd,.bb all) {}\n',
  },
  {
    name: 'tests-unit/empty/empty.less',
    input: '\n\n\n',
  },
  {
    name: 'tests-unit/directives-bubbling/directives-bubbling.less',
    input:
      '//simple case: @document\n.parent {\n  color:green;\n  \n  @document url-prefix() {\n    .child {\n      color:red;\n    }\n  }   \n}\n\n//selectors joinings test\n.top {\n  @supports (sandwitch: butter) {\n    .inside & {\n      property: value;\n    }\n  }\n}\n\n@supports (sandwitch: bread) {\n  .in1 {\n    .in2 {\n      property: value;\n    }\n  }\n}\n\n.top {\n  .inside & {\n    @supports (sandwitch: ham) {\n      property: value;\n    }\n  }\n}\n\n//combined with @font-face which has different kind of body\n@supports (font-family: weirdFont) {\n  @font-face {\n    font-family: something;\n    src: made-up-url;\n  }\n}\n\n@font-face {\n  @supports not (-webkit-font-smoothing: subpixel-antialiased) {\n    font-family: something;\n    src: made-up-url;\n  }\n}\n\n//bubbling through media\n@supports (property: value) {\n  .outOfMedia & {\n    @media (max-size: 2px) {\n      @supports (whatever: something) {\n        property: value;\n      } \n    }\n  }\n}\n\n.onTop & {\n  @supports (property: value) {\n    @media (max-size: 2px) {\n      @supports (whatever: something) {\n        property: value;\n      } \n    }\n  }\n}\n\n\n//long combination of supports and media\n@media print {\n  html {\n    in-html: visible;\n    @supports (upper: test) {\n      in-supports: first;\n      div {\n        in-div: visible;\n        @supports not (-webkit-font-smoothing: subpixel-antialiased) {\n          in-supports: second;\n          @media screen {\n            font-weight: 400;\n            nested {\n              property: value;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n//another long combination of supports and media\n@media print {\n  @media (max-size: 2px) {\n    .in1 {\n      stay: here;\n      @supports not (-webkit-font-smoothing: subpixel-antialiased) {\n        .in2 & {\n          @supports (whatever: something) {\n            property: value;\n          } \n        }\n      }\n    }\n  }\n}\n\n//called from mixin \n.nestedSupportsMixin() {\n  font-weight: 300;\n  -webkit-font-smoothing: subpixel-antialiased;\n  @supports not (-webkit-font-smoothing: subpixel-antialiased) {\n    font-weight: 400;\n    nested {\n      property: value;\n    }\n  }\n}\n\nhtml {\n    .nestedSupportsMixin();\n}\n\n// selectors should not propagate into all directive types\n.onTop {\n  @font-face {\n    font-family: something;\n    src: made-up-url;\n  }\n\n  @keyframes "textscale" {\n      0% { font-size : 1em; }\n    100% { font-size : 2em; }\n  }\n\n  animation   : "textscale";\n  font-family : something;\n}\n\n',
  },
  {
    name: 'tests-unit/detached-rulesets/detached-rulesets.less',
    input:
      '@ruleset: {\n  color: black;\n  background: white;\n}\n\n@a: 1px;\n.wrap-mixin(@ruleset) {\n  @a: hidden and if you see this in the output its a bug;\n  @b: visible;\n  @d: magic-frame; // same behaviour as mixin calls - falls back to this frame\n  .wrap-selector {\n      @c: visible;\n      @ruleset();\n      visible-one: @b;\n      visible-two: @c;\n    }\n}\n\n.wrap-mixin({\n  color: black;\n  one: @a;\n  @b: hidden and if you see this in the output its a bug;\n  @c: hidden and if you see this in the output its a bug;\n  four: @d;\n});\n\n.wrap-mixin(@ruleset: {\n  color: red;\n});\n\n.wrap-mixin(@ruleset);\n\n.desktop-and-old-ie(@rules) {\n  @media screen and (min-width: 1200) { @rules() }\n  html.lt-ie9 &                       { @rules() }\n}\n\nheader {\n  background: blue;\n\n  .desktop-and-old-ie({\n    background: red;\n  });\n}\n\n.wrap-mixin-calls-wrap(@ruleset) {\n  .wrap-mixin(@ruleset);\n};\n\n.wrap-mixin({\n  test: extra-wrap;\n  .wrap-mixin-calls-wrap({\n    test: wrapped-twice;\n  });\n});\n\n.wrap-mixin({\n  test-func: unit(90px);\n  test-arithmetic: unit((9+9), px);\n});\n// without mixins\n@ruleset-2: {\n  b: 1;\n};\n.without-mixins {\n  @ruleset-2();\n}\n@my-ruleset: {\n    .my-selector {\n      @media (tv) {\n        background-color: black;\n      }\n    }\n  };\n@media (orientation:portrait) {\n    @my-ruleset();\n    .wrap-media-mixin({\n      @media (tv) {\n        .triple-wrapped-mq {\n          triple: true;\n        }\n      }\n    });\n}\n.wrap-media-mixin(@ruleset) {\n  @media (widescreen) {\n    @media (print) {\n      @ruleset();\n    }\n    @ruleset();\n  }\n  @ruleset();\n}\n// unlocking mixins\n@my-mixins: {\n  .mixin() {\n    test: test;\n  }\n};\n@my-mixins();\n.a {\n  .mixin();\n}\n// as mixin argument default\n.mixin-definition(@a: {}; @b: {default: works;};) {\n  @a();\n  @b();\n}\n.argument-default {\n  .mixin-definition();\n  .mixin-definition({direct: works;}; @b: {named: works;});\n}\n\n\n',
  },
  {
    name: 'tests-unit/css-guards/css-guards.less',
    input:
      '.light when (lightness(@a) > 50%) {\n  color: green;\n}\n.dark when (lightness(@a) < 50%) {\n  color: orange;\n}\n@a: #ddd;\n\n.see-the {\n  @a: #444; // this mirrors what mixins do - they evaluate the guards at the point of definition\n  .light();\n  .dark();\n}\n\n.hide-the {\n  .light();\n  .dark();\n}\n\n.multiple-conditions-1 when (@b = 1), (@c = 2), (@d = 3) {\n  color: red;\n}\n\n.multiple-conditions-2 when (@b = 1), (@c = 2), (@d = 2) {\n  color: blue;\n}\n\n@b: 2;\n@c: 3;\n@d: 3;\n\n.inheritance when (@b = 2) {\n  .test-rule {\n    color: black;\n  }\n  &:hover {\n    color: pink;\n  }\n  .hideme when (@b = 1) {\n    color: green;\n  }\n  & when (@b = 1) {\n    hideme: green;\n  }\n}\n\n.hideme when (@b = 1) {\n  .test-rule {\n    color: black;\n  }\n  &:hover {\n    color: pink;\n  }\n  .hideme when (@b = 1) {\n    color: green;\n  }\n}\n\n& when (@b = 1) {\n  .hideme {\n    color: red;\n  }\n}\n\n.mixin-with-guard-inside(@colWidth) {\n  // selector with guard (applies also to & when() ...)\n  .clsWithGuard when (@colWidth <= 0) {\n    dispaly: none;\n  }\n}\n\n.mixin-with-guard-inside(0px);\n\n.dont-split-me-up {\n  width: 1px;\n  & when (@c = 3) {\n    color: red;\n  }\n  & when (@c = 3) {\n    height: 1px;\n  }\n  * & when (@c = 3) {\n    sibling: true;\n  }\n}\n\n.scope-check when (@c = 3) {\n  @k: 1px;\n  & when (@c = 3) {\n    @k: 2px;\n    sub-prop: @k;\n  }\n  prop: @k;\n}\n.scope-check-2 {\n  .scope-check();\n  @k:4px;\n}\n.errors-if-called when (@c = never) {\n  .mixin-doesnt-exist();\n}\na:hover when (2 = true) {5:-}\n\n\n',
  },
  {
    name: 'tests-unit/css-grid/css-grid.less',
    input:
      '.wrapper {\n  display: grid;\n  grid-template-columns: [col1-start] 9fr [col1-end] 10px [col2-start] 3fr [col2-end];\n  grid-template-rows: auto;\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: [left-bound] auto [container-left] 1170px [container-right] auto [right-bound];\n  grid-template-rows: [row-1-start] 140px [row-2-start] 390px [row-3-start] 200px [row-4-start] 120px [row-5-start] 120px [row-6-start] 120px;\n}\n\n.container-12 {\n  z-index: 20;\n  display: grid;\n  grid-column: container-left / span 1;\n  grid-row: 2;\n  grid-template-columns: [wrapcol-1-start] 1fr [wrapcol-1-end] 15px [wrapcol-2-start] 1fr [wrapcol-2-end] 15px [wrapcol-3-start] 1fr [wrapcol-3-end] 15px [wrapcol-4-start] 1fr [wrapcol-4-end] 15px [wrapcol-5-start] 1fr [wrapcol-5-end] 15px [wrapcol-6-start] 1fr [wrapcol-6-end] 15px [wrapcol-7-start] 1fr [wrapcol-7-end] 15px [wrapcol-8-start] 1fr [wrapcol-8-end] 15px [wrapcol-9-start] 1fr [wrapcol-9-end] 15px [wrapcol-10-start] 1fr [wrapcol-10-end] 15px [wrapcol-11-start] 1fr [wrapcol-11-end] 15px [wrapcol-12-start] 1fr [wrapcol-12-end];\n  grid-template-rows: repeat(14, [gutter] 10px [row] 60px);\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 9fr 1.875em 3fr;\n  grid-template-rows: auto;\n  grid-template-areas:\n    "header header header"\n    "content . sidebar"\n    "footer footer footer";\n}\n\n\n',
  },
  {
    name: 'tests-unit/css-escapes/css-escapes.less',
    input:
      "// CSS escapes tests\n@ugly: fuchsia;\n\n.escape\\|random\\|char {\n    color: red;\n}\n\n.mixin\\!tUp {\n    font-weight: bold;\n}\n\n// class=\"404\"\n.\\34 04 {\n    background: red;\n\n    strong {\n        color: @ugly;\n        .mixin\\!tUp();\n    }\n}\n\n.trailingTest\\+ {\n    color: red;\n}\n\n/* This hideous test of hideousness checks for the selector \"blockquote\" with various permutations of hex escapes */\n\\62\\6c\\6f \\63 \\6B \\0071 \\000075o\\74 e {\n    color: silver;\n}\n\n[ng\\:cloak],\nng\\:form {\n  display: none;\n}\n\n// In Bootstrap v3\n.bootstrap {\n    background-color: #000 \\9;\n}\n\ntextarea {\n    font-family: 'helvetica neue','wenquanyi micro hei',\\5FAE\\8F6F\\96C5\\9ED1, \\5B8B\\4F53, sans-serif;\n}\n\ne('/* anything to unquote */');\n",
  },
  {
    name: 'tests-unit/css-3/css-3.less',
    input:
      '@namespace foo url(http://www.example.com);\n.comma-delimited {\n  text-shadow: -1px -1px 1px red, 6px 5px 5px yellow;\n  -moz-box-shadow: 0pt 0pt 2px rgba(255, 255, 255, 0.4) inset,\n    0pt 4px 6px rgba(255, 255, 255, 0.4) inset;\n  -webkit-transform: rotate(-0.0000000001deg);\n}\n@font-face {\n  font-family: Headline;\n  unicode-range: U+??????, U+0???, U+0-7F, U+A5;\n}\n.other {\n  -moz-transform: translate(0, 11em) rotate(-90deg);\n  transform: rotateX(45deg);\n}\n.item[data-cra_zy-attr1b-ut3=bold] {\n  font-weight: bold;\n}\np:not([class*="lead"]) {\n  color: black;\n}\n\ninput[type="text"].class#id[attr=i32]:not(.one) {\n  color: inherit;\n}\n\ndiv#id.class[a=one][b=two].class:not(.one) {\n  color: inherit;\n}\n\nul.comma > li:not(:only-child)::after {\n  color: inherit;\n}\n\nol.comma > li:nth-last-child(2)::after {\n  color: inherit;\n}\n\nli:nth-child(4n+1),\nli:nth-child(-5n),\nli:nth-child(-n+2) {\n  color: inherit;\n}\n\na[href^="http://"] {\n  color: black;\n}\n\na[href$="http://"] {\n  color: black;\n}\n\nform[data-disabled] {\n  color: black;\n}\n\np::before {\n  color: black;\n}\n\n#issue322 {\n  -webkit-animation: anim2 7s infinite ease-in-out;\n}\n\n@-webkit-keyframes frames {\n  0% { border: 1px }\n  5.5% { border: 2px }\n  100% { border: 3px }\n}\n\n@keyframes fontbulger1 {\n  to {\n    font-size: 15px;\n  }\n  from,to {\n    font-size: 12px;\n  }\n  0%,100% {\n    font-size: 12px;\n  }\n}\n\n@supports ( box-shadow: 2px 2px 2px black ) or\n          ( -moz-box-shadow: 2px 2px 2px black ) {\n  .outline {\n    box-shadow: 2px 2px 2px black;\n    -moz-box-shadow: 2px 2px 2px black;\n  }\n}\n\n@-x-document url-prefix(""github.com"") {\n  h1 {\n    color: red;\n  }\n}\n\n@viewport {\n  font-size: 10px;\n}\n\nfoo|h1 { color: blue; }\nfoo|* { color: yellow; }\n*|h1 { color: green; }\nh1 { color: green; }\n.upper-test {\n  UpperCaseProperties: allowed;\n}\n@host {\n  div {\n    display: block;\n  }\n}\n:not(input::placeholder) {\n  color: #b3b3b3;\n}\n.shadow > .dom,\nbody > .shadow {\n  display: done;\n}\n\n:host(.sel.a),\n:host-context(.sel.b),\n.sel > .b,\n::content .sel {\n  type: shadow-dom;\n}\n* b {\n c: \'d\';\n &[e]{\n   f: \'g\';\n }\n}\n\n#issue2066 {\n  background: url(\'/images/icon-team.svg\') 0 0 / contain;\n}\n\n@counter-style triangle {\n  system: cyclic;\n  symbols: ‣;\n  suffix: " ";\n}\n\n@-ms-viewport{\n  // width: auto !important;\n}\n\n@unknown foo 42 (bar) {\n    x {y: z}\n}\n\n@unknown foo 43;\n\n\n',
  },
  {
    name: 'tests-unit/container/container.less',
    input:
      '.widget.discoverresults, .widget.repositoriesresults {\n    container-type: inline-size;\n\n    @container (max-width: 350px) {           \n        .cite {\n            .wdr-authors {\n                display: none;\n            }\n        }\n    }\n}\n\n@container (min-width: 700px) {\n    .card h2 {\n        font-size: 2em;\n    }\n}\n\n@container sidebar (min-width: 700px) {\n    .card {\n        font-size: 2em;\n    }\n}\n\n@container (min-width: 60ch) {\n    .container:nth-child(odd) > article {\n        border: 1px solid grey;\n    }\n}\n\n@container size(min-width: 60ch) {\n    .article--post header {\n        grid-template-areas:\n            "avatar name"\n            "avatar headline";\n        align-items: start;\n    }\n  \n    .article--post {\n        grid-template-areas: "header header" ". stats" ". content";\n        grid-auto-columns: 5rem 1fr;\n        column-gap: 1rem;\n    }\n  \n    .article--post__title {\n        font-size: 1.75rem;\n    }\n}\n\n.card h2 {\n    container-type: inline-size;\n    margin: 0;\n    padding: 10px;\n\n    @container (min-width: 500px) {\n        .card-content {\n            grid-template-columns: 1fr 2fr;\n            grid-template-rows: auto 1fr;\n            align-items: start;\n            column-gap: 20px;\n        }\n \n        .card-content h2 {\n            padding: 0;\n            margin: 0.5em 0 0 0;\n        } \n    }\n}\n\n@container (width >= 500px) and (height >= 500px) {\n    .card-content h2 {\n        padding: 0;\n        margin: 0.5em 0 0 0;\n    } \n}\n\n@container (width > 760px) not (height > 670px) {\n    .card-content h2 {\n        padding: 0;\n        margin: 0.5em 0 0 0;\n    } \n}\n\n@container not (height <= 1080px) {\n    .card-content h2 {\n        padding: 0;\n        margin: 0.5em 0 0 0;\n    } \n}\n\n@container (width < 500px) or (height < 500px) {\n    .card-content h2 {\n        padding: 0;\n        margin: 0.5em 0 0 0;\n    } \n}\n\n@container (width < 500px) or (height < 500px) and (inline-size >= 0px) {\n    .card-content p {\n        padding: 0;\n\n        h2 {\n            margin: 0.5em 0 0 0;\n        }\n    } \n}\n\n@container my-page-layout (width < 500px) or (height < 500px) and (block-size > 12em) {\n    .card-content p {\n        padding: 0;\n\n        h2 {\n            margin: 0.5em 0 0 0;\n        }\n    } \n}\n\n@container (width < 500px) or (height < 500px) and (aspect-ratio: 3/2) {\n    .card-content p {\n        padding: 0;\n\n        h2 {\n            margin: 0.5em 0 0 0;\n        }\n    } \n}\n\n@container (width < 500px) or (height < 500px) and (orientation: portrait) {\n    .card-content p {\n        padding: 0;\n\n        h2 {\n            margin: 0.5em 0 0 0;\n        }\n    } \n}\n\n@container card (inline-size > 30em) {\n    .card-content p {\n        padding: 0;\n\n        h2 {\n            margin: 0.5em 0 0 0;\n        }\n    }\n    \n    @container style(--responsive: true) {\n        .card-content {\n            grid-template-columns: 1fr 2fr;\n            grid-template-rows: auto 1fr;\n            align-items: start;\n            column-gap: 20px;\n        }\n \n        .card-content h2 {\n            padding: 0;\n            margin: 0.5em 0 0 0;\n        }\n    }\n}\n\n@container card (width > 400px), style(--responsive: true), scroll-state(stuck: top) {\n    h2 {\n        font-size: 1.5em;\n    }\n}\n\n@container style(--theme) {\n    .style-query {\n        color: red;\n    }\n}\n\n@container style((--theme: one) or (--theme: two)) {\n    .style-query-list {\n        color: blue;\n    }\n}\n\n@container contactBody (min-width: 1300px) {\n    .named-container {\n        width: 25%;\n    }\n}\n\n@container _body (min-width: 1300px) {\n    .underscored-container {\n        width: 25%;\n    }\n}\n\n@container --body (min-width: 1300px) {\n    .custom-ident-container {\n        width: 25%;\n    }\n}\n\n@container contact\\.body (min-width: 1300px) {\n    .escaped-container {\n        width: 25%;\n    }\n}\n\n@container café (min-width: 1300px) {\n    .nonascii-container {\n        width: 25%;\n    }\n}\n\n@container ( width < 500px ) or (height<500px) and (orientation: portrait) {\n    .card-content p {\n        padding: 0;\n\n        h2 {\n            margin: 0.5em 0 0 0;\n        }\n    } \n}\n\n@container my-page-layout ( width< 500px) or ( height<500px) and ( block-size>12em ) {\n    .card-content p {\n        padding: 0;\n\n        h2 {\n            margin: 0.5em 0 0 0;\n        }\n    } \n}\n\n.wrapper {\n    container-name: wrapper;\n    container-type: size;\n}\n  \n.my_mixin(@height) {\n    @container wrapper (height < @height) {\n        a {\n            max-height: @height;\n        }\n    }\n}\n  \n.my_mixin(100);\n.my_mixin(200);\n.my_mixin(300);\n\n@media only screen and (min-width: 768px) {\n    @container (min-width: 500px) {\n        .primary-content {\n            font-size: 1rem;\n        }\n    }\n}\n\n@media only screen and (min-width: 768px) {\n    .media-1 {\n        font-size: 1.5rem;\n    }\n\n    @container (min-width: 500px) {\n        .primary-content {\n            font-size: 1rem;\n        }\n    }\n}\n\n@media only screen and (min-width: 768px) {\n    .media-1 {\n        font-size: 1.5rem;\n    }\n    \n    @container (min-width: 500px) {\n        .primary-content {\n            font-size: 1rem;\n        }\n    }\n\n    .media-2 {\n        font-size: 2rem;\n    }\n}\n\n@media only screen and (min-width: 768px) {\n    .media-1 {\n        font-size: 1.5rem;\n    }\n    \n    @container (min-width: 500px) {\n        .primary-content {\n            font-size: 1rem;\n        }\n\n        @media (hover: hover) {\n            .foo {\n                font-size: 1.75rem;\n            }\n        }\n    }\n\n    .media-2 {\n        font-size: 2rem;\n    }\n}\n\n@media only screen and (min-width: 768px) {\n    .media-1 {\n        font-size: 1.5rem;\n    }\n    \n    @container (min-width: 500px) {\n        .primary-content {\n            font-size: 1rem;\n        }\n\n        @media (hover: hover) {\n            .foo {\n                font-size: 1.75rem;\n\n                @media not all and (hover: hover) {\n                    color: limegreen;\n                }\n            }\n\n            .media-3 {\n                padding: 0.5rem;\n            }\n        }\n    }\n\n    .media-2 {\n        font-size: 2rem;\n    }\n}\n\n@container (min-width: 768px) {\n    @media only screen and (min-width: 768px) {\n        .foo {\n            color: aliceblue;\n        }\n    }\n\n    .container-1 {\n        color: purple;\n    }\n}\n\n#sticky {\n    position: sticky;\n    container-type: scroll-state;\n}\n\n@container scroll-state(stuck: top) {\n    #sticky-child {\n      font-size: 75%;\n    }\n}\n\n@container scroll-state(snapped: x) {\n    #sticky-child {\n      font-size: 75%;\n    }\n}\n\n@container scroll-state(scrollable: top) {\n    #sticky-child {\n      font-size: 75%;\n    }\n}\n\n@container sidebar (min-width: 400px), scroll-state(stuck: top) {\n    #sticky-child {\n      font-size: 80%;\n    }\n}\n\n@varfoo: foo;\n@threshold: 400px;\n@container @varfoo (min-width: @threshold) {\n    #sticky-child {\n      font-size: 75%;\n    }\n}\n\n// Regression test: mixin with variable container name and variable query condition\n// Issue: mixins with parameters using @container @name (condition < @var) failed\n// with "variable @bp is undefined" error in older versions\n@issue-width: 125px;\n\n.container-query-mixin(@container-name; @bp) {\n    @container @container-name (width < @bp) {\n        display: none;\n    }\n}\n\n.mixin-container-test {\n    .container-query-mixin(name, @issue-width);\n    color: red;\n}\n\n// Verify multiple calls with different params produce correct output\n.sidebar-test {\n    .container-query-mixin(sidebar, 500px);\n}\n.header-test {\n    .container-query-mixin(header, 800px);\n}\n',
  },
  {
    name: 'tests-unit/comments/comments.less',
    input:
      '// Comprehensive comment handling tests\n/******************\\\n*                  *\n*  Comment Header  *\n*                  *\n\\******************/\n\n/*\n\n    Comment\n\n*/\n\n/*\n * Comment Test\n *\n * - cloudhead (http://cloudhead.net)\n *\n */\n\n////////////////\n@var: "content";\n////////////////\n\n/* Colors\n * ------\n *   #EDF8FC (background blue)\n *   #166C89 (darkest blue)\n *\n * Text:\n *   #333 (standard text) // A comment within a comment!\n *   #1F9EC9 (standard link)\n *\n */\n\n/* @group Variables\n------------------- */\n#comments /* boo *//* boo again*/,\n//.commented_out1\n//.commented_out2\n//.commented_out3\n.comments //end of comments1\n//end of comments2\n{\n  /**/ // An empty comment\n  color: red; /* A C-style comment */  /* A C-style comment */\n  background-color: orange; // A little comment\n  font-size: 12px;\n\n  /* lost comment */ content: @var;\n\n  border: 1px solid black;\n\n  // padding & margin //\n  padding: 0; // }{ \'"\n  margin: 2em;\n} //\n\n/* commented out\n  #more-comments {\n    color: grey;\n  }\n*/\n\n.selector /* .with */, .lots, /* of */ .comments {\n  color/* survive */ /* me too */: grey, /* blue */ orange;\n  -webkit-border-radius: 2px /* webkit only */;\n  -moz-border-radius: (2px * 4) /* moz only with operation */;\n}\n\n.mixin_def_with_colors(@a: white, // in\n       @b: 1px //put in @b - causes problems! --->\n       ) // the\n       when (@a = white) {\n    .test-rule {\n        color: @b;\n    }\n}\n.mixin_def_with_colors();\n\n// .s when\n//R/2\n\n.sr-only-focusable {\n  clip: auto;\n}\n\n@-webkit-keyframes /* Safari */ hover /* and Chrome */ {\n  0% {\n    color: red;\n  }\n}\n\n#last { color: blue }\n//\n\n/*  *//* { *//*  *//*  *//*  */#div { color:#A33; }/* } */\n\n// line immediately followed\n/*by block */\n@string_w_comment: ~"/* // Not commented out // */";\n#output-block { --comment: @string_w_comment; }\n/*comment on last line*/\n',
  },
  {
    name: 'tests-unit/comments/comments2.less',
    input:
      '// Inline comments and grid system tests\n@media all and/*! */(max-width:1024px) {}\n@-webkit-keyframes hover /* Safari and Chrome */{  }\n.bg {\n  background-image: linear-gradient(#333 /*{comment}*/, #111);\n}\n#planadvisor,\n/*comment*//*comment*/\n.first,/*comment*//*comment*/.planning {\n    margin:10px;\n    total-width: @total-width;\n}\n@base                       :   1;\n@column-width               :   @base * 6em;                //      Width of column             */\n@gutter-width               :   2em;                        //      Width of column spacing     */\n@columns                    :   12;                         //      Number of Columns           */\n@gridsystem-width           :   (@column-width *            //      For calculating the total   */\n                                    @columns) + (               //      width of the content area.  */\n                                    @gutter-width *             //      We strongly recommend you   */\n                                    @columns);                  //      do not change this formula. */\n@total-width                :   @gridsystem-width;          //      set to 100% for fluid grid  */\n\n// .............................................................................\n\n.some-inline-comments {\n    a: yes /* comment */;\n    b: red /* comment */;\n   @c: yes /* comment */;\n   @d: red /* comment */;\n    c: @c;\n    d: @d;\n}\n',
  },
  {
    name: 'tests-unit/color-functions/alpha.less',
    input:
      '// Alpha function tests - no nesting, just alpha function behavior\n#alpha {\n    @colorvar: rgba(150, 200, 150, 0.7);\n    #fromvar {\n        opacity: alpha(@colorvar);\n    }\n    #short {\n        opacity: alpha(#aaa);\n    }\n    #long {\n        opacity: alpha(#bababa);\n    }\n    #rgba {\n        opacity: alpha(rgba(50, 120, 95, 0.2));\n    }\n    #hsl {\n        opacity: alpha(hsl(120, 100%, 50%));\n    }\n    #transparent-hex4 {\n        opacity: alpha(#0000);\n    }\n    #transparent-hex8 {\n        opacity: alpha(#00000000);\n    }\n}\n',
  },
  {
    name: 'tests-unit/color-functions/basic.less',
    input:
      '// Basic color function tests - no nesting, just color functions\n.lightenblue {\n    color: lighten(blue, 10%);\n}\n\n.darkenblue {\n    color: darken(blue, 10%);\n}\n\n.unknowncolors {\n    color: blue2;\n    border: 2px solid superred;\n}\n\n.transparent {\n    color: transparent;\n    background-color: rgba(0, 0, 0, 0);\n}\n\n#percentage {\n  color: red(rgb(100%, 0, 0));\n  border-color: rgba(100%, 0, 0, 50%);\n}\n',
  },
  {
    name: 'tests-unit/color-functions/comprehensive.less',
    input:
      '// Comprehensive color function tests - all color functions without problematic nesting\n.lightenblue {\n    color: lighten(blue, 10%);\n}\n\n.darkenblue {\n    color: darken(blue, 10%);\n}\n\n.unknowncolors {\n    color: blue2;\n    border: 2px solid superred;\n}\n\n.transparent {\n    color: transparent;\n    background-color: rgba(0, 0, 0, 0);\n}\n\n#alpha {\n    @colorvar: rgba(150, 200, 150, 0.7);\n    #fromvar {\n        opacity: alpha(@colorvar);\n    }\n    #short {\n        opacity: alpha(#aaa);\n    }\n    #long {\n        opacity: alpha(#bababa);\n    }\n    #rgba {\n        opacity: alpha(rgba(50, 120, 95, 0.2));\n    }\n    #hsl {\n        opacity: alpha(hsl(120, 100%, 50%));\n    }\n}\n\n#percentage {\n  color: red(rgb(100%, 0, 0));\n  border-color: rgba(100%, 0, 0, 50%);\n}\n\n#grey {\n  color: rgb(200, 200, 200);\n}\n\n#aa3333 {\n  color: rgb(66.66%, 20%, 20%);\n}\n\n#bb8080 {\n  color: hsl(0deg, 30%, 62%);\n}\n\n#ccff00 {\n  color: hsl(72deg, 100%, 50%);\n}\n',
  },
  {
    name: 'tests-unit/color-functions/formats.less',
    input:
      '// Color format tests - testing different color formats and conversions\n#yelow #short {\n  color: #fea;\n}\n#yelow #long {\n  color: #ffeeaa;\n}\n#yelow #rgba {\n  color: rgba(255, 238, 170, 0.1);\n}\n#yelow #argb {\n  color: argb(rgba(255, 238, 170, 0.1));\n}\n\n#blue #short {\n  color: #00f;\n}\n#blue #long {\n  color: #0000ff;\n}\n#blue #rgba {\n  color: rgba(0, 0, 255, 0.1);\n}\n#blue #argb {\n  color: argb(rgba(0, 0, 255, 0.1));\n}\n\n#alpha #hsla {\n    color: hsla(11, 20%, 20%, 0.6);\n}\n\n#grey {\n  color: rgb(200, 200, 200);\n}\n\n#aa3333 {\n  color: rgb(66.66%, 20%, 20%);\n}\n\n#bb8080 {\n  color: hsl(0deg, 30%, 62%);\n}\n\n#ccff00 {\n  color: hsl(72deg, 100%, 50%);\n}\n',
  },
  {
    name: 'tests-unit/color-functions/modern-syntax.less',
    input:
      '// Modern CSS color syntax tests - space-separated values and / alpha syntax\nfoo {\n  color: rgb(0 128 255);\n  color: rgb(0 128 255 / 50%);\n  color: hsl(198deg 28% 50%);\n  color: hsl(198deg 28% 50% / 50%);\n}\n',
  },
  {
    name: 'tests-unit/color-functions/modern.less',
    input:
      '// Modern color space function tests\n.color-oklch-sub {\n  background: oklch(from #0000FF calc(l - 0.1) c h);\n}\n\n.color-oklch-add {\n  background: oklch(from #0000FF calc(l + 0.1) c h);\n}\n\n.color-oklch-mult {\n  background: oklch(from #0000FF calc(l * 0.1) c h);\n}\n\n.color-oklch-div {\n  background: oklch(from #0000FF calc(l / 2) c h);\n}\n\n.color-hsl-sub {\n  background: hsl(from #0000FF calc(h - 1) s l);\n}\n\n.color-hsl-add {\n  background: hsl(from #0000FF calc(h + 1) s l);\n}\n\n.color-hsl-mult {\n  background: hsl(from #0000FF calc(h * 1) s l);\n}\n\n.color-hsl-div {\n  background: hsl(from #0000FF calc(h / 2) s l);\n}\n\n.color-rgb-sub {\n  background: rgb(from #0000FF calc(r - 1) g b);\n}\n\n.color-rgb-add {\n  background: rgb(from #0000FF calc(r + 1) g b);\n}\n\n.color-rgb-mult {\n  background: rgb(from #0000FF calc(r * 1) g b);\n}\n\n.color-rgb-div {\n  background: rgb(from #0000FF calc(r / 2) g b);\n}\n\n.color-rgb-sub-right-operand {\n  background: rgb(from blue calc(100 - r) g b);\n}\n\n.color-rgb-add-left-operand {\n  background: rgb(from blue calc(r + 100) g b);\n}\n',
  },
  {
    name: 'tests-unit/color-functions/operations.less',
    input:
      '// Color operations tests - testing color math operations\n#overflow {\n  .a { color: (#111111 - #444444); } // #000000\n  .b { color: (#eee + #fff); } // #ffffff\n  .c { color: (#aaa * 3); } // #ffffff\n  .d { color: (#00ee00 + #009900); } // #00ff00\n  .e { color: rgba(-99.9, 31.4159, 321, 0.42); }\n}\n',
  },
  {
    name: 'tests-unit/color-functions/rgba.less',
    input:
      "// RGBA and RRGGBBAA tests\n#rrggbbaa {\n  test-1: #55FF5599;\n  test-2: #5F59;\n  test-3: lighten(#55FF5599, 10%);\n  test-4: fade(#5F59, 10%);\n  test-5: rgba(#55FF5599);\n  test-6: rgba(#5F59);\n  test-7: rgba(#5F59, 0.5);\n  test-8: rgba(var(--color-accent), 0.2);\n  test-9: rgb(var(--color-accent));\n  test-9: hsla(var(--color-accent));\n  test-10: color('#55FF5599');\n  test-11: hsla(#5F59);\n  test-12: hsla(#5F59, 0.5);\n  --semi-transparent-dark-background: #001e00ee;\n  --semi-transparent-dark-background-2: rgba(0, 30, 0, 238); // invalid opacity will be capped\n}\n",
  },
  {
    name: 'tests-unit/charsets/charsets.less',
    input:
      '// @charset directive test\n@charset "UTF-8";\n\n@import "import/import-charset-test";\n',
  },
  {
    name: 'tests-unit/charsets/import/import-charset-test.less',
    input: '@charset "ISO-8859-1";\n',
  },
  {
    name: 'tests-unit/calc/calc.less',
    input:
      "@val: 10px;\n@var: 50vh/2;\n\n.calc-basic {\n  width: calc(100% - 30px);\n  height: calc(50% + 20px);\n  margin: calc(10px * 2);\n  padding: calc(100vh - 50px);\n}\n\n.calc-variables {\n  @c: 10px + 20px;\n  @calc: (@val + 30px);\n  root: calc(100% - @c);\n  root2: calc(100% - @calc);\n  width: calc(50% + (@var - 20px));\n  height: calc(50% + ((@var - 20px)));\n}\n\n.calc-nested {\n  min-height: calc(((10vh)) + calc((5vh)));\n  nested: calc(calc(2.25rem + 2px) - 1px * 2);\n}\n\n.calc-functions {\n  @a: 10px;\n  @b: 10px;\n  @floor: floor(1 + .1);\n  \n  one: calc(100% - ((min(@a + @b))));\n  two: calc(100% - (((@a + @b))));\n  bar: calc(@floor + 20%);\n}\n\n.calc-escape {\n  three: calc(e('100%') - (3 * 1));\n  four: calc(~'100%' - (3 * 1));\n}\n\n.calc-mixed {\n  foo: 1 + 2 calc(3 + 4) 5 + 6;\n  @v: 10px;\n  height: calc(100% - ((@v * 3) + (@v * 2)));\n}\n\n\n",
  },
  {
    name: 'tests-unit/at-rules-targeted/at-rules-targeted.less',
    input:
      '// Targeted tests for specific uncovered lines in atrule.js\n\n// Line 35-36: Single ruleset with declarations (allRulesetDeclarations path)\n@media screen {\n  .test {\n    color: red;\n  }\n}\n\n// Line 138-140: Value that evaluates to keyword list (keywordList method)\n@media screen, print, handheld {\n  body {\n    font-size: 12pt;\n  }\n}\n\n// Line 146-154: rules[0].rules path with mergeable declarations\n@supports (display: grid) {\n  .grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n// Line 155-158: simpleBlock with rules evaluation\n@page {\n  margin: 2cm;\n  size: A4;\n}\n\n// Line 172-174: Non-simpleBlock rules evaluation (evalRoot)\n@media screen {\n  @media (max-width: 768px) {\n    .nested {\n      display: block;\n    }\n  }\n}\n\n// Line 203-215: evalRoot with ampersand counting\n.container {\n  @media screen {\n    & {\n      color: red;\n    }\n    .child {\n      color: blue;\n    }\n  }\n}\n\n// Line 217-236: variable, find, rulesets methods\n// These methods are called when accessing variables/properties from within at-rule scope\n@media screen {\n  @var: value;\n  .test-var-access {\n    color: @var;\n  }\n}\n\n// Line 238-270: outputRuleset (compressed and non-compressed)\n@layer base {\n  body {\n    margin: 0;\n  }\n  p {\n    padding: 0;\n  }\n}\n\n// Line 121: At-rule without rules or declarations\n@charset "UTF-8";\n\n// Line 103-105: isRulesetLike and isCharset\n@charset "UTF-8";\n@media screen {\n  body {\n    color: black;\n  }\n}\n\n',
  },
  {
    name: 'tests-unit/at-rules-keyword-comments/at-rules-keyword-comments.less',
    input:
      '// Tests for atrule.js keywordList method with Comments (line 84)\n// Covers parser + eval + keywordList path\n// This tests when a keyword list contains Comments\n\n@media screen /* comment */, print /* another */, handheld {\n  body {\n    font-size: 12pt;\n  }\n}\n\n// @import with media queries containing comments\n@import "test.css" screen /* comment */, print;\n\n',
  },
  {
    name: 'tests-unit/at-rules-empty-block/at-rules-empty-block.less',
    input:
      '// Tests for atrule.js lines 255-256 - empty rules block in non-compressed mode\n// Covers parser + genCSS + outputRuleset with empty rules\n\n// @media with empty block\n@media screen {\n}\n\n// @supports with empty block  \n@supports (display: grid) {\n}\n\n// @layer with empty block\n@layer base {\n}\n\n// @page with empty block\n@page {\n}\n\n',
  },
  {
    name: 'tests-unit/at-rules-empty/at-rules-empty.less',
    input:
      '// Tests for atrule.js line 121 - genCSS with no rules or declarations\n// Covers parser + genCSS path\n\n// @charset without block\n@charset "UTF-8";\n\n// @import (will be processed separately, but tests the path)\n@import url("test.css");\n\n// @namespace\n@namespace "http://www.w3.org/1999/xhtml";\n\n// @namespace with prefix\n@namespace svg "http://www.w3.org/2000/svg";\n\n',
  },
  {
    name: 'tests-unit/at-rules-declarations/at-rules-declarations.less',
    input:
      '// Tests for atrule.js line 117 - genCSS with simpleBlock declarations\n// Covers parser + genCSS + outputRuleset with declarations path\n\n// @page with declarations (simpleBlock)\n@page {\n  margin: 2cm;\n  size: A4;\n  marks: crop cross;\n}\n\n// @font-face with declarations\n@font-face {\n  font-family: "MyFont";\n  src: url("myfont.woff2");\n  font-weight: 400;\n  font-style: normal;\n}\n\n// @counter-style with declarations\n@counter-style my-counter {\n  system: fixed;\n  symbols: "A" "B" "C";\n  suffix: ". ";\n}\n\n',
  },
  {
    name: 'tests-unit/at-rules/at-rules.less',
    input:
      '// Test various @-rule types and structures\n\n// @page with simple block\n@page {\n  margin: 2cm;\n  @top-left {\n    content: "Page " counter(page);\n  }\n}\n\n// @page with nested rules\n@page :first {\n  margin: 3cm;\n  @top-center {\n    content: "First Page";\n  }\n}\n\n// @charset\n@charset "UTF-8";\n\n// @namespace\n@namespace url(http://www.w3.org/1999/xhtml);\n@namespace svg url(http://www.w3.org/2000/svg);\n\n// @viewport\n@viewport {\n  width: device-width;\n  initial-scale: 1.0;\n}\n\n// @keyframes with simple block\n@keyframes slidein {\n  from {\n    margin-left: 100%;\n    width: 300%;\n  }\n  to {\n    margin-left: 0%;\n    width: 100%;\n  }\n}\n\n// @keyframes with nested rules (name can be a string)\n@keyframes "complex-animation" {\n  0% {\n    opacity: 0;\n    transform: scale(0.5);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(1.2);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n// @font-face with simple block\n@font-face {\n  font-family: "MyFont";\n  src: url("myfont.woff2") format("woff2");\n  font-weight: normal;\n  font-style: normal;\n}\n\n// @font-face with variables\n@font-family-name: "CustomFont";\n@font-face {\n  font-family: @font-family-name;\n  src: url("custom.woff") format("woff");\n}\n\n// @supports with simple block\n@supports (display: grid) {\n  .grid-container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n// @supports with nested @-rules\n@supports (transform-style: preserve-3d) {\n  @media (min-width: 768px) {\n    .card {\n      transform: rotateY(15deg);\n    }\n  }\n}\n\n// @media with simple block\n@media print {\n  body {\n    font-size: 12pt;\n    color: black;\n  }\n}\n\n// @media with nested @-rules\n@media screen {\n  @supports (display: flex) {\n    .container {\n      display: flex;\n    }\n  }\n}\n\n// @-rule with value (not simple block)\n@media (max-width: 600px) {\n  .sidebar {\n    display: none;\n  }\n}\n\n// @-rule inside ruleset\n.container {\n  @media (max-width: 768px) {\n    padding: 10px;\n  }\n}\n\n// Multiple @-rules\n@page :left {\n  margin-left: 4cm;\n  margin-right: 3cm;\n}\n\n@page :right {\n  margin-left: 3cm;\n  margin-right: 4cm;\n}\n\n// @-rule with mixins\n.mixin-with-atrule() {\n  @media (max-width: 600px) {\n    .mobile-only {\n      display: block;\n    }\n  }\n}\n\n.wrapper {\n  .mixin-with-atrule();\n}\n\n// @-rule with variables in value\n@breakpoint: 1024px;\n@media (min-width: @breakpoint) {\n  .desktop {\n    display: block;\n  }\n}\n\n',
  },
  {
    name: 'tests-config/visitorPlugin/visitor.less',
    input:
      '.test-rule {\n    color: red;\n    -some-aribitrary-property: value;\n}\n',
  },
  {
    name: 'tests-config/url-args/urls.less',
    input:
      '@font-face {\n  src: url("/fonts/garamond-pro.ttf");\n  src: local(Futura-Medium),\n       url(fonts.svg#MyGeometricModern) format("svg");\n}\n#shorthands {\n  background: url("http://www.lesscss.org/spec.html") no-repeat 0 4px;\n  background: url("img.jpg") center / 100px;\n  background: #fff url(image.png) center / 1px 100px repeat-x scroll content-box padding-box;\n}\n#misc {\n  background-image: url(images/image.jpg);\n}\n#data-uri {\n  background: url(data:image/png;charset=utf-8;base64,\n    kiVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/\n    k//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U\n    kg9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC);\n  background-image: url(data:image/x-png,f9difSSFIIGFIFJD1f982FSDKAA9==);\n  background-image: url(http://fonts.googleapis.com/css?family=\\"Rokkitt\\":\\(400\\),700);\n  background-image: url("http://fonts.googleapis.com/css?family=\\"Rokkitt\\":\\(400\\),700");\n}\n\n#svg-data-uri {\n  background: transparent url(\'data:image/svg+xml, <svg version="1.1"><g></g></svg>\');\n}\n\n.comma-delimited {\n  background: url(bg.jpg) no-repeat, url(bg.png) repeat-x top left, url(bg);\n}\n.values {\n    @a: \'Trebuchet\';\n    url: url(@a);\n}\n\n@import "../../tests-unit/import/import/imports/font";\n\n#data-uri {\n  uri: data-uri(\'image/jpeg;base64\', \'../../data/image.jpg\');\n}\n\n#data-uri-guess {\n  uri: data-uri(\'../../data/image.jpg\');\n}\n\n#data-uri-ascii {\n  uri-1: data-uri(\'text/html\', \'../../data/page.html\');\n  uri-2: data-uri(\'../../data/page.html\');\n}\n\n#svg-functions {\n  background-image: svg-gradient(to bottom, black, white);\n  background-image: svg-gradient(to bottom, black, orange 3%, white);\n  @green_5: green 5%;\n  @orange_percentage: 3%;\n  @orange_color: orange;\n  background-image: svg-gradient(to bottom, (mix(black, white) + #444) 1%, @orange_color @orange_percentage, ((@green_5)), white 95%);\n}\n\n#data-uri-with-spaces {\n  background-image: url( data:image/x-png,f9difSSFIIGFIFJD1f982FSDKAA9==);\n  background-image: url( \' data:image/x-png,f9difSSFIIGFIFJD1f982FSDKAA9==\');\n}\n',
  },
  {
    name: 'tests-config/units/strict/strict-units.less',
    input:
      '.units {\n  cancels-to-nothing: (1px / 1px);\n  cancels: ((((10px / 5em) / 1px) * 3em) * 1px);\n}\n',
  },
  {
    name: 'tests-config/units/no-strict/no-strict.less',
    input:
      '@media (-o-min-device-pixel-ratio: 2) {\n  .test-rule-math-and-units {\n    font: ignores 0/0 rules;\n    test-division: 4 / 2 + 5em;\n    simple: 1px + 1px;\n  }\n}\n#units {\n  t1: (2em/1em) + 20;\n  t2: 20 + (2em/1em);\n  t3: 2em/1em;\n  t4: (2em/1px) + 20;\n  t5: 20 + (2em/1px);\n  t6: 2em/1px;\n  t7: (2em*1em) + 20;\n  t8: 20 + (2em*1em);\n  t9: 2em*1em;\n  t10: (2em*1px) + 20;\n  t11: 20 + (2em*1px);\n  t12: 2em*1px;\n}',
  },
  {
    name: 'tests-config/strict-imports/imported.less',
    input: '.imported {\n  background: green;\n}\n',
  },
  {
    name: 'tests-config/strict-imports/strict-imports.less',
    input:
      '// Test that strictImports: true allows @import at root level\n@import "imported.less";\n\n// Test that strictImports: true allows @import inside @media blocks\n@media (max-width: 768px) {\n  @import "imported.less";\n  .mobile {\n    color: red;\n  }\n}\n\n// Test that strictImports: true skips @import inside selector blocks (import is not processed)\n.container {\n  @import "imported.less";\n  .nested {\n    color: blue;\n  }\n}\n\n',
  },
  {
    name: 'tests-config/static-urls/urls.less',
    input:
      '@font-face {\n  src: url("/fonts/garamond-pro.ttf");\n  src: local(Futura-Medium),\n       url(fonts.svg#MyGeometricModern) format("svg");\n}\n#shorthands {\n  background: url("http://www.lesscss.org/spec.html") no-repeat 0 4px;\n}\n#misc {\n  background-image: url(images/image.jpg);\n}\n#data-uri {\n  background: url(data:image/png;charset=utf-8;base64,\n    kiVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/\n    k//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U\n    kg9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC);\n  background-image: url(data:image/x-png,f9difSSFIIGFIFJD1f982FSDKAA9==);\n  background-image: url(http://fonts.googleapis.com/css?family=\\"Rokkitt\\":\\(400\\),700);\n}\n\n#svg-data-uri {\n  background: transparent url(\'data:image/svg+xml, <svg version="1.1"><g></g></svg>\');\n}\n\n.comma-delimited {\n  background: url(bg.jpg) no-repeat, url(bg.png) repeat-x top left, url(bg);\n}\n.values {\n    @a: \'Trebuchet\';\n    url: url(@a);\n}\n\n@import "../../tests-unit/import/import/import-and-relative-paths-test";\n\n',
  },
  {
    name: 'tests-config/sourcemaps-variable-selector/basic.less',
    input:
      '@import (reference) "./vars.less";\n\n.@{hello}-class {\n    font-size: @font-size;\n}\n',
  },
  {
    name: 'tests-config/sourcemaps-variable-selector/vars.less',
    input: '@foo: bar;\n@font-size: 12px;\n@hello: world;\n',
  },
  {
    name: 'tests-config/sourcemaps-url/sourcemaps-url.less',
    input:
      '@color: red;\n\n.header {\n  color: @color;\n  background: blue;\n}\n\n.footer {\n  margin: 10px;\n}\n\n',
  },
  {
    name: 'tests-config/sourcemaps-rootpath/sourcemaps-rootpath.less',
    input:
      '@var: green;\n\n.container {\n  padding: 20px;\n  color: @var;\n}\n\n.item {\n  margin: 5px;\n}\n\n',
  },
  {
    name: 'tests-config/sourcemaps-include-source/sourcemaps-include-source.less',
    input:
      '@primary: #007bff;\n@secondary: #6c757d;\n\n.button {\n  background: @primary;\n  color: white;\n  padding: 10px 20px;\n}\n\n.secondary {\n  background: @secondary;\n}\n\n',
  },
  {
    name: 'tests-config/sourcemaps-empty/empty.less',
    input: '',
  },
  {
    name: 'tests-config/sourcemaps-empty/var-defs.less',
    input: "@test-var: 'something';",
  },
  {
    name: 'tests-config/sourcemaps-disable-annotation/basic.less',
    input:
      'body {\n  /*# sourceMappingURL=this-should-be-ok.css.map */\n  color: white;\n}',
  },
  {
    name: 'tests-config/sourcemaps-basepath/sourcemaps-basepath.less',
    input:
      '@size: 16px;\n\n.text {\n  font-size: @size;\n  line-height: 1.5;\n}\n\n.title {\n  font-weight: bold;\n}\n\n',
  },
  {
    name: 'tests-config/sourcemaps/basic.less',
    input:
      '@var: black;\n\n.a() {\n  color: red;\n}\n\n.b {\n  color: green;\n  .a();\n  color: blue;\n  background: @var;\n}\n\n.a, .b {\n  background: green;\n  .c, .d {\n    background: gray;\n    & + & {\n      color: red;\n    }\n  }\n}\n\n.extend:extend(.a all) {\n  color: pink;\n}\n@import (inline) "imported.css";',
  },
  {
    name: 'tests-config/sourcemaps/custom-props.less',
    input:
      '@color: var(--foo);\n\nbody {\n\tborder-left: 1px solid @color;\n\twidth: calc(50% - 5px);\n\tborder-top: 1px solid @color;\n}\n\n',
  },
  {
    name: 'tests-config/sourcemaps/comprehensive/comprehensive.less',
    input:
      '// Comprehensive sourcemap test covering various Less.js features\n// This test exercises sourcemap generation for different code structures\n\n// Variables\n@primary-color: #3498db;\n@secondary-color: #2ecc71;\n@spacing: 20px;\n\n// Mixins\n.border-radius(@radius: 5px) {\n  border-radius: @radius;\n  -webkit-border-radius: @radius;\n  -moz-border-radius: @radius;\n}\n\n.box-shadow(@x: 0, @y: 0, @blur: 10px, @color: rgba(0,0,0,0.5)) {\n  box-shadow: @x @y @blur @color;\n}\n\n// Nested rules\n.container {\n  padding: @spacing;\n  background: @primary-color;\n  \n  .header {\n    color: white;\n    font-size: 24px;\n    \n    .title {\n      font-weight: bold;\n      margin-bottom: 10px;\n    }\n  }\n  \n  .content {\n    background: @secondary-color;\n    padding: 15px;\n    \n    p {\n      margin: 0;\n      line-height: 1.5;\n    }\n  }\n}\n\n// Operations\n.calculated {\n  width: calc(100% - @spacing * 2);\n  height: calc(50vh + 20px);\n  margin: (@spacing / 2);\n}\n\n// Functions\n.functions {\n  color: darken(@primary-color, 10%);\n  background: lighten(@secondary-color, 20%);\n  border: 1px solid fade(@primary-color, 50%);\n}\n\n// Mixins\n.card {\n  .border-radius(10px);\n  .box-shadow(0, 2px, 15px, rgba(0,0,0,0.1));\n  padding: @spacing;\n  background: white;\n}\n\n// @-rules\n@media (max-width: 768px) {\n  .container {\n    padding: (@spacing / 2);\n    \n    .header {\n      font-size: 18px;\n    }\n  }\n}\n\n@supports (display: grid) {\n  .grid-layout {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: @spacing;\n  }\n}\n\n// Extend\n.button-base {\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n}\n\n.button-primary {\n  &:extend(.button-base);\n  background: @primary-color;\n  color: white;\n}\n\n// Selectors with &\n.navigation {\n  ul {\n    list-style: none;\n    \n    li {\n      display: inline-block;\n      \n      a {\n        text-decoration: none;\n        \n        &:hover {\n          color: @primary-color;\n        }\n        \n        &:active {\n          color: darken(@primary-color, 20%);\n        }\n      }\n    }\n  }\n}\n\n// Import (if we have imported files)\n// @import "imported.less";\n\n// Variables in selectors\n@selector-name: my-component;\n.@{selector-name} {\n  color: @primary-color;\n}\n\n// Multiple levels of nesting\n.level1 {\n  .level2 {\n    .level3 {\n      .level4 {\n        color: @secondary-color;\n      }\n    }\n  }\n}\n\n',
  },
  {
    name: 'tests-config/rootpath-rewrite-urls-local/rootpath-rewrite-urls-local.less',
    input:
      '@import "./folder/file.less";\n\n#rootpath-rewrite-urls-local {\n  background-image: url("./relative/path");\n  background-image: url("../relative/path");\n  background-image: url("./relative/../path");\n  background-image: url("./relative/../path/..");\n  background-image: url("module");\n  background-image: url("module/path");\n  background-image: url("module/path/../relative/path");\n}\n',
  },
  {
    name: 'tests-config/rootpath-rewrite-urls-local/folder/file.less',
    input:
      '#imported-file {\n  background-image: url("./relative/path");\n  background-image: url("../relative/path");\n  background-image: url("../../relative/path");\n  background-image: url("module");\n  background-image: url("module/path");\n  background-image: url("module/path/../relative/path");\n}\n',
  },
  {
    name: 'tests-config/rootpath-rewrite-urls-all/rootpath-rewrite-urls-all.less',
    input:
      '@import "./folder/file.less";\n\n#rootpath-rewrite-urls-all {\n  background-image: url("./relative/path");\n  background-image: url("../relative/path");\n  background-image: url("./relative/../path");\n  background-image: url("./relative/../path/..");\n  background-image: url("module");\n  background-image: url("module/path");\n  background-image: url("module/path/../relative/path");\n}\n',
  },
  {
    name: 'tests-config/rootpath-rewrite-urls-all/folder/file.less',
    input:
      '#imported-file {\n  background-image: url("./relative/path");\n  background-image: url("../relative/path");\n  background-image: url("../../relative/path");\n  background-image: url("module");\n  background-image: url("module/path");\n  background-image: url("module/path/../relative/path");\n}\n',
  },
  {
    name: 'tests-config/root-registry/file.less',
    input: '@charset "utf-8";',
  },
  {
    name: 'tests-config/root-registry/root.less',
    input:
      "// https://github.com/less/less.js/issues/3112\n@file: ext();\n@import '@{file}';",
  },
  {
    name: 'tests-config/rewrite-urls-local/rewrite-urls-local.less',
    input:
      '@import "./folder/file.less";\n\n#rewrite-urls-local {\n  background-image: url("./relative/path");\n  background-image: url("../relative/path");\n  background-image: url("./relative/../path");\n  background-image: url("./relative/../path/..");\n  background-image: url("module");\n  background-image: url("module/path");\n  background-image: url("module/path/../relative/path");\n}\n',
  },
  {
    name: 'tests-config/rewrite-urls-local/folder/file.less',
    input:
      '#imported-file {\n  background-image: url("./relative/path");\n  background-image: url("../relative/path");\n  background-image: url("../../relative/path");\n  background-image: url("module");\n  background-image: url("module/path");\n  background-image: url("module/path/../relative/path");\n}\n',
  },
  {
    name: 'tests-config/rewrite-urls-all/rewrite-urls-all.less',
    input:
      '@import "./folder/file.less";\n\n#rewrite-urls-all {\n  background-image: url("./relative/path");\n  background-image: url("../relative/path");\n  background-image: url("./relative/../path");\n  background-image: url("./relative/../path/..");\n  background-image: url("module");\n  background-image: url("module/path");\n  background-image: url("module/path/../relative/path");\n}\n',
  },
  {
    name: 'tests-config/rewrite-urls-all/folder/file.less',
    input:
      '#imported-file {\n  background-image: url("./relative/path");\n  background-image: url("../relative/path");\n  background-image: url("../../relative/path");\n  background-image: url("module");\n  background-image: url("module/path");\n  background-image: url("module/path/../relative/path");\n}\n',
  },
  {
    name: 'tests-config/process-imports/google.less',
    input:
      "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\n\n.a { b: c; }",
  },
  {
    name: 'tests-config/preProcessorPlugin/preProcessor.less',
    input: '.test-rule {\n    color: @color;\n}\n',
  },
  {
    name: 'tests-config/postProcessorPlugin/postProcessor.less',
    input: '@color: inherit;\n.test-rule {\n    color: @color;\n}\n',
  },
  {
    name: 'tests-config/no-js-errors/no-js-errors.less',
    input: '.a {\n  a: `1 + 1`;\n}',
  },
  {
    name: 'tests-config/namespacing/namespacing-1.less',
    input:
      '@varToGet: default-color;\n.foo {\n  color1: @defaults[@default-color];\n  color2: @defaults[@nested][@color];\n  color3: @theme[color];\n  color4: @theme[@nested][color];\n  color5: @defaults[@@varToGet];\n  prop: #ns1[foo];\n  var: #ns1[@foo];\n  sub: #ns1.vars[$sub];\n}\n\n@defaults: {\n  @default-color: red;\n  @nested: {\n    @color: yellow;\n  }\n};\n\n@theme: {\n  color: red;\n  @nested: {\n    color: yellow;\n  }\n};\n\n#ns1 {\n  foo: bar;\n  @foo: baz;\n  .vars() {\n    sub: value;\n  }\n}\n\n// Test that it matches more than one mixin\n#ns1 {\n  foo: uno;\n  @foo: dos;\n  .vars() {\n    sub: tres;\n  }\n}\n\n// https://github.com/less/less.js/issues/3346\n#DEF() {\n  .colors() { primary: grey; }\n}\n\n.button {\n  color: #DEF.colors[primary];\n  border-color: #AAA #CCC;\n}',
  },
  {
    name: 'tests-config/namespacing/namespacing-2.less',
    input:
      '@import "imports/library.less";\n\n.bar {\n  width: #library.sizes[@width];\n  height: #library.add-one(1px)[@return];\n}\n\n// I\'m gonna override some values\n#library {\n  .sizes() {\n    @width: 800px;\n  }\n}\n\n.foo {\n  width: #library.sizes[@width];\n}\n\n.foods() {\n  @dessert: ice cream;\n}\n\n@key-to-lookup: dessert;\n\n.lunch {\n  treat: .foods[@@key-to-lookup];\n}',
  },
  {
    name: 'tests-config/namespacing/namespacing-3.less',
    input:
      '@map: {\n  @width: 400px;\n  @colors: {\n    toolbar-background: red;\n    toolbar-foreground: inherit;\n  }\n};\n\n#ns {\n  .mixin() {\n    @height: 200px;\n  }\n}\n\n@breakpoints: {\n  mobile: 320px;\n  tablet: 768px;\n  desktop: 1024px;\n};\n\n@media (min-width: @breakpoints[mobile]) {\n  .toolbar {\n    width: @map[@width];\n    height: #ns.mixin[@height];\n    background: @map[@colors][toolbar-background];\n    color: @map[@colors][toolbar-foreground];\n  }\n}\n\n// !important after map usage\n// https://github.com/less/less.js/issues/3430\n@margins: {\n    zero: 0;\n    ten: 10px;\n}\n.cell {\n  margin: @margins[zero] (@margins[ten]/2) !important;\n}\n\n.mixin(@color: black; @margin: 10px; @padding: 20px) {\n  color: @color;\n  margin: @margin;\n  padding: @padding;\n  width: @margins[zero] !important\n}\n.class1 {\n  .mixin(@margin: 20px; @color: #33acfe) !important;\n}\n.class2 {\n  .mixin(#efca44; @padding: 40px 10px);\n}\n',
  },
  {
    name: 'tests-config/namespacing/namespacing-4.less',
    input:
      '#ns {\n  .mixin(@a) when (@a = 1) {\n    @a: 20px;\n  }\n}\n\n.alias() {\n  #ns.mixin(1);\n}\n\n#library {\n  .core() {\n    .colors() {\n      primary: blue;\n      foreground: inherit;\n    }\n  }\n}\n\n#library {\n  .core() {\n    .colors() {\n      primary: rebeccapurple;\n    }\n  }\n}\n\n.foo {\n  .colors() { #library.core.colors(); }\n  width: .alias[@a];\n  background: .colors[primary];\n  color: .colors[foreground];\n}',
  },
  {
    name: 'tests-config/namespacing/namespacing-5.less',
    input:
      '@import "imports/a-better-bootstrap";\n\n#theme.dark.navbar {\n  .colors() {\n    primary: rebeccapurple;\n  }\n  .colors(dark) {\n    primary: black;\n    secondary: grey;\n  }\n  .test-rule() {\n    val: output;\n  }\n}\n\n.my-navbar {\n  #theme.dark.navbar();\n  background: .colors[primary];\n  .test-rule();\n}\n\n.another-navbar {\n  @colors: #theme.dark.navbar.colors() !important;\n  background: @colors[primary];\n  border: 1px solid @colors[secondary];\n}\n\n.another {\n  @colors: #theme.dark.navbar.colors(dark);\n  background: @colors[primary];\n  border: 1px solid @colors[secondary];\n}',
  },
  {
    name: 'tests-config/namespacing/namespacing-6.less',
    input:
      '.wrapper(@another-mixin) {\n  @another-mixin();\n}\n\n.something(foo) {\n  width: 10px;\n}\n\n.output-height() {\n  height: 10px;\n}\n\n.rule-1 {\n  @alias: .something(foo);\n  @alias();\n}\n\n.rule-2 {\n  @alias: .something(foo);\n  .wrapper(@alias);\n}\n\n.rule-3 {\n  .wrapper(.something(foo));\n  .wrapper(.output-height());\n}',
  },
  {
    name: 'tests-config/namespacing/namespacing-7.less',
    input:
      '#ns {\n  .options() {\n    option: true;\n  }\n}\n\n@ns: {\n  @options: {\n    option: true;\n  };\n};\n\n& when (#ns.options[option]) {\n  .output {\n    a: b;\n  }\n}\n\n& when (#ns.options[option] = true) {\n  .output-2 {\n    c: d;\n  }\n}\n\n& when (#ns.options[option] = false) {\n  .no-reach {\n    c: d;\n  }\n}\n\n// DR access\n& when (@ns[@options][option]) {\n  .dr {\n    a: b;\n  }\n}\n\n& when (@ns[@options][option] = true) {\n  .dr-2 {\n    c: d;\n  }\n}\n\n& when (@ns[@options][option] = false) {\n  .dr-no-reach {\n    c: d;\n  }\n}',
  },
  {
    name: 'tests-config/namespacing/namespacing-8.less',
    input:
      '// see: https://github.com/less/less.js/issues/3368\n@vars: {\n  background-color: black;\n  color: contrast($background-color, #000, #fff);\n}\n  \n:root {\n  each(@vars, {\n    --@{key}: @value;\n  });\n}\n\ndiv {\n  display: inline-block;\n  padding: 1rem;\n  background-color: var(--background-color);\n  color: var(--color);\n}\n\n// see: https://github.com/less/less.js/issues/3339\n// still fails - move to 4.0\n// @components: {\n//   columns: true;\n//   ratios: false;\n// };\n\n// each(@components, {\n//   & when (@value = true) {\n//       @import (optional) "components/@{key}.less";\n//   }\n// });',
  },
  {
    name: 'tests-config/namespacing/namespacing-functions.less',
    input:
      '.add(@a, @b) {\n  @r: @a + @b;\n}\n.foo {\n  width: .add(10px, 10px)[];\n  bar: @return[];\n}\n\n@return: {\n  single: val;\n}\n\n// Issue #3405\n#lookup {\n  @prop: test;\n}\n\n.mix (@var) {\n  width: @var;\n}\n\n.bar {\n  .mix(#lookup[@prop]);\n}\n\n// Issue #3406\n.mix2 (@n) {\n  value: @n;\n}\n#lookup2 {\n  @var: .mix2(lookup);\n}\n.example {\n  // #lookup[@var](); -- fails, need the following alias\n  @dr: #lookup2[@var];\n  @dr();\n}',
  },
  {
    name: 'tests-config/namespacing/namespacing-media.less',
    input:
      '#ns {\n  .sizes() {\n    @small: 600px;\n  }\n  .breakpoint(@size) {\n    @val: #ns.sizes[@@size];\n    @min: (min-width: @val);\n    @max: not all and @min;\n  }\n}\n\n#ns {\n  .sizes() {\n    @small: 480px;\n  }\n}\n\n.valToGet() {\n  keyword: small;\n}\n\n@media #ns.breakpoint(.valToGet[])[@max] {\n  .selector {\n    prop: val;\n  }\n}',
  },
  {
    name: 'tests-config/namespacing/namespacing-operations.less',
    input:
      '#ns {\n  .options() {\n    val1: 10px;\n  }\n}\n\n@ns: {\n  @options: {\n    val2: 20px;\n  }\n}\n\n.foo {\n  val: #ns.options[val1] + @ns[@options][val2] + 5px;\n}',
  },
  {
    name: 'tests-config/namespacing/imports/a-better-bootstrap.less',
    input:
      '#theme() {\n  .light() {} //...\n  .dark() {\n    // ...\n    .navbar() {\n      .colors() {\n        primary: blue;\n        secondary: lightblue;\n      }\n    }\n    // ...\n  }\n}',
  },
  {
    name: 'tests-config/namespacing/imports/library.less',
    input:
      '\n// I am a library\n#library {\n  .sizes() {\n    @width: 600px;\n  }\n  .add-one(@val) {\n    @return: @val + 1px;\n  }\n  .sizes(@test) when (@test = true) {\n    @width: 400px;\n  }\n}\n\n',
  },
  {
    name: 'tests-config/modifyVars/extended.less',
    input:
      '#header {\n  color: (@base-color * 3);\n  border-left: @the-border;\n  border-right: (@the-border * 2);\n}\n#footer {\n  color: (@base-color + #003300);\n  border-color: @red;\n}\n@red: blue; // var is overridden by the modifyVars\n//@base-color: green;',
  },
  {
    name: 'tests-config/math-strict/css.less',
    input:
      "@charset \"utf-8\";\ndiv { color: black; }\ndiv { width: 99%; }\n\n* {\n  min-width: 45em;\n}\n\nh1, h2 > a > p, h3 {\n  color: none;\n}\n\ndiv.class {\n  color: blue;\n}\n\ndiv#id {\n  color: green;\n}\n\n.class#id {\n  color: purple;\n}\n\n.one.two.three {\n  color: grey;\n}\n\n@media print {\n  * {\n    font-size: 3em;\n  }\n}\n\n@media screen {\n  * {\n    font-size: 10px;\n  }\n}\n\n@font-face {\n  font-family: 'Garamond Pro';\n}\n\na:hover, a:link {\n  color: #999;\n}\n\np, p:first-child {\n  text-transform: none;\n}\n\nq:lang(no) {\n  quotes: none;\n}\n\np + h1 {\n  font-size: +2.2em;\n}\n\n#shorthands {\n  border: 1px solid #000;\n  font: 12px/16px Arial;\n  font: 100%/16px Arial;\n  margin: 1px 0;\n  padding: 0 auto;\n}\n\n#more-shorthands {\n  margin: 0;\n  padding: 1px 0 2px 0;\n  font: normal small/20px 'Trebuchet MS', Verdana, sans-serif;\n  font: 0/0 a;\n  border-radius: 5px / 10px;\n}\n\n.misc {\n  -moz-border-radius: 2px;\n  display: -moz-inline-stack;\n  width: .1em;\n  background-color: #009998;\n  background: -webkit-gradient(linear, left top, left bottom, from(red), to(blue));\n  margin: ;\n  .nested-multiple {\n    multiple-semi-colons: yes;;;;;;\n  };\n  filter: alpha(opacity=100);\n  width: auto\\9;\n}\n\n#important {\n  color: red !important;\n  width: 100%!important;\n  height: 20px ! important;\n}\n\n.def-font(@name) {\n    @font-face {\n        font-family: @name\n    }\n}\n\n.def-font(font-a);\n.def-font(font-b);\n\n.æøå {\n  margin: 0;\n}\n",
  },
  {
    name: 'tests-config/math-strict/media-math.less',
    input:
      '@var: 16;\n\n@media (min-width: @var + 1) {\n  .foo { bar: 1; }\n}\n\n@media (min-width: @var / 9) {\n  .foo { bar: 1; }\n}',
  },
  {
    name: 'tests-config/math-strict/mixins-args.less',
    input:
      '.mixin (@a: 1px, @b: 50%) {\n  width: (@a * 5);\n  height: (@b - 1%);\n  depth: @b - 1%;\n}\n\n.mixina (@style, @width, @color: black) {\n    border: @width @style @color;\n}\n\n.mixiny\n(@a: 0, @b: 0) {\n  margin: @a;\n  padding: @b;\n}\n\n.hidden() {\n  color: transparent; // asd\n}\n\n#hidden {\n  .hidden();\n}\n\n#hidden1 {\n  .hidden();\n}\n\n.two-args {\n  color: blue;\n  .mixin(2px, 100%);\n  .mixina(dotted, 2px);\n}\n\n.one-arg {\n  .mixin(3px);\n}\n\n.no-args {\n  .mixin();\n}\n\n.var-args {\n  @var: 9;\n  .mixin(@var, (@var * 2) / 2);\n}\n\n.multi-mix {\n  .mixin(2px, 30%);\n  .mixiny(4, 5);\n}\n\n.maxa(@arg1: 10, @arg2: #f00) {\n  padding: (@arg1 * 2px);\n  color: @arg2;\n}\n\nbody {\n  .maxa(15);\n}\n\n@glob: 5;\n.global-mixin(@a:2) {\n  width: (@glob + @a);\n}\n\n.scope-mix {\n  .global-mixin(3);\n}\n\n.nested-ruleset (@width: 200px) {\n    width: @width;\n    .column { margin: @width; }\n}\n.content {\n    .nested-ruleset(600px);\n}\n\n//\n\n.same-var-name2(@radius) {\n  radius: @radius;\n}\n.same-var-name(@radius) {\n  .same-var-name2(@radius);\n}\n#same-var-name {\n  .same-var-name(5px);\n}\n\n//\n\n.var-inside () {\n    @var: 10px;\n    width: @var;\n}\n#var-inside { .var-inside(); }\n\n.mixin-arguments (@width: 0px, ...) {\n    border: @arguments;\n    width: @width;\n}\n\n.arguments {\n    .mixin-arguments(1px, solid, black);\n}\n.arguments2 {\n    .mixin-arguments();\n}\n.arguments3 {\n    .mixin-arguments();\n}\n\n.mixin-arguments2 (@width, @rest...) {\n    border: @arguments;\n    rest: @rest;\n    width: @width;\n}\n.arguments4 {\n    .mixin-arguments2(0, 1, 2, 3, 4);\n}\n\n// Edge cases\n\n.edge-case {\n    .mixin-arguments("{");\n}\n\n// Division vs. Literal Slash\n.border-radius(@r: 2px/5px) {\n  border-radius: @r;\n}\n.slash-vs-math {\n  .border-radius();\n  .border-radius(5px/10px);\n  .border-radius((3px * 2));\n}\n// semi-colon vs comma for delimiting\n\n.mixin-takes-one(@a) {\n    one: @a;\n}\n\n.mixin-takes-two(@a; @b) {\n    one: @a;\n    two: @b;\n}\n\n.comma-vs-semi-colon {\n    .mixin-takes-two(@a : a; @b : b, c);\n    .mixin-takes-two(@a : d, e; @b : f);\n    .mixin-takes-one(@a: g);\n    .mixin-takes-one(@a : h;);\n    .mixin-takes-one(i);\n    .mixin-takes-one(j;);\n    .mixin-takes-two(k, l);\n    .mixin-takes-one(m, n;);\n    .mixin-takes-two(o, p; q);\n    .mixin-takes-two(r, s; t;);\n}\n\n.mixin-conflict(@a:defA, @b:defB, @c:defC) {\n  three: @a, @b, @c;\n}\n\n.mixin-conflict(@a:defA, @b:defB, @c:defC, @d:defD) {\n  four: @a, @b, @c, @d;\n}\n\n#named-conflict {\n  .mixin-conflict(11, 12, 13, @a:a);\n  .mixin-conflict(@a:a, 21, 22, 23);\n}\n@a: 3px;\n.mixin-default-arg(@a: 1px, @b: @a, @c: @b) {\n  defaults: 1px 1px 1px;\n  defaults: 2px 2px 2px;\n}\n\n.test-rule-mixin-default-arg {\n  .mixin-default-arg();\n  .mixin-default-arg(2px);\n}\n\n.mixin-comma-default1(@color; @padding; @margin: 2, 2, 2, 2) {\n  margin: @margin;\n}\n.selector {\n  .mixin-comma-default1(#33acfe; 4);\n}\n.mixin-comma-default2(@margin: 2, 2, 2, 2;) {\n  margin: @margin;\n}\n.selector2 {\n  .mixin-comma-default2();\n}\n.mixin-comma-default3(@margin: 2, 2, 2, 2) {\n  margin: @margin;\n}\n.selector3 {\n  .mixin-comma-default3(4,2,2,2);\n}\n\n.test-rule-calling-one-arg-mixin(@a) {\n}\n\n.test-rule-calling-one-arg-mixin(@a, @b, @rest...) {\n}\n\ndiv {\n  .test-rule-calling-one-arg-mixin(1);\n}\n\nmixins-args-expand-op- {\n  @x: 1, 2, 3;\n  @y: 4  5  6;\n\n  &1 {.m3(@x...)}\n  &2 {.m3(@y...)}\n  &3 {.wr(a, b, c)}\n  &4 {.wr(a; b; c, d)}\n  &5 {.wr(@x...)}\n  &6 {.m4(0; @x...)}\n  &7 {.m4(@x..., @a: 0)}\n  &8 {.m4(@b: 1.5; @x...)}\n  &9 {.aa(@y, @x..., and again, @y...)}\n\n  .m3(@a, @b, @c) {\n    m3: @a, @b, @c;\n  }\n\n  .m4(@a, @b, @c, @d) {\n    m4: @a, @b, @c, @d;\n  }\n\n  .wr(@a...) {\n    &a {.m3(@a...)}\n    &b {.m4(0, @a...)}\n    &c {.m4(@a..., 4)}\n  }\n\n  .aa(@a...) {\n    aa: @a;\n    a4: extract(@a, 5);\n    a8: extract(@a, 8);\n  }\n}\n#test-mixin-matching-when-default-2645 {\n  .mixin(@height) {\n    height: @height;\n  }\n\n  .mixin(@width, @height: 10px) {\n    width: @width;\n\n    .mixin(@height: @height);\n  }\n\n  .mixin(@height: 20px);\n}',
  },
  {
    name: 'tests-config/math-strict/parens.less',
    input:
      '.parens-issues-3616 {\n  bar: if(false, 666, 888 / 444);\n  bar2: if(false, 666, (666 / 333));\n  bar3: if(false, 666, ((444 / 222)));\n}\n\n.parens {\n  @var: 1px;\n  border: (@var * 2) solid black;\n  margin: (@var * 1) (@var + 2) (4 * 4) 3;\n  width: (6 * 6);\n  padding: 2px (6 * 6px);\n}\n\n.more-parens {\n  @var: (2 * 2);\n  padding: (2 * @var) 4 4 (@var * 1px);\n  width-all: ((@var * @var) * 6);\n  width-first: ((@var * @var)) * 6;\n  width-keep: (@var * @var) * 6;\n  height: calc(100% + (25vh - 20px));\n  height-keep: (7 * 7) + (8 * 8);\n  height-all: ((7 * 7) + (8 * 8));\n  height-parts: ((7 * 7)) + ((8 * 8));\n  margin-keep: (4 * (5 + 5) / 2) - (@var * 2);\n  margin-parts: ((4 * (5 + 5) / 2)) - ((@var * 2));\n  margin-all: ((4 * (5 + 5) / 2) + (-(@var * 2)));\n  border-radius-keep: 4px * (1 + 1) / @var + 3px;\n  border-radius-parts: ((4px * (1 + 1))) / ((@var + 3px));\n  border-radius-all: (4px * (1 + 1) / @var + 3px);\n  // margin: (6 * 6)px;\n}\n\n.negative {\n  @var: 1;\n  neg-var: -@var; // -1 ?\n  neg-var-paren: -(@var); // -(1) ?\n}\n\n.nested-parens {\n  width: 2 * (4 * (2 + (1 + 6))) - 1;\n  height: ((2 + 3) * (2 + 3) / (9 - 4)) + 1;\n}\n\n.mixed-units {\n  margin: 2px 4em 1 5pc;\n  padding: (2px + 4px) 1em 2px 2;\n}\n\n.test-rule-false-negatives {\n  a: ~"(";\n}\n',
  },
  {
    name: 'tests-config/math-parens-division/media-math.less',
    input:
      '@var: 10 + 6;\n\n@media (min-width: @var + 1) {\n  .foo { bar: 1; }\n}\n\n@media (min-width: @var / 9) {\n  .foo { bar: 1; }\n}',
  },
  {
    name: 'tests-config/math-parens-division/mixins-args.less',
    input:
      '.mixin (@a: 1px, @b: 50%) {\n  width: (@a * 5);\n  height: (@b - 1%);\n  depth: @b - 1%;\n}\n\n.mixina (@style, @width, @color: black) {\n    border: @width @style @color;\n}\n\n.mixiny\n(@a: 0, @b: 0) {\n  margin: @a;\n  padding: @b;\n}\n\n.hidden() {\n  color: transparent; // asd\n}\n\n#hidden {\n  .hidden();\n}\n\n#hidden1 {\n  .hidden();\n}\n\n.two-args {\n  color: blue;\n  .mixin(2px, 100%);\n  .mixina(dotted, 2px);\n}\n\n.one-arg {\n  .mixin(3px);\n}\n\n.no-args {\n  .mixin();\n}\n\n.var-args {\n  @var: 9;\n  .mixin(@var, (@var * 2) / 2);\n}\n\n.multi-mix {\n  .mixin(2px, 30%);\n  .mixiny(4, 5);\n}\n\n.maxa(@arg1: 10, @arg2: #f00) {\n  padding: (@arg1 * 2px);\n  color: @arg2;\n}\n\nbody {\n  .maxa(15);\n}\n\n@glob: 5;\n.global-mixin(@a:2) {\n  width: (@glob + @a);\n}\n\n.scope-mix {\n  .global-mixin(3);\n}\n\n.nested-ruleset (@width: 200px) {\n    width: @width;\n    .column { margin: @width; }\n}\n.content {\n    .nested-ruleset(600px);\n}\n\n//\n\n.same-var-name2(@radius) {\n  radius: @radius;\n}\n.same-var-name(@radius) {\n  .same-var-name2(@radius);\n}\n#same-var-name {\n  .same-var-name(5px);\n}\n\n//\n\n.var-inside () {\n    @var: 10px;\n    width: @var;\n}\n#var-inside { .var-inside(); }\n\n.mixin-arguments (@width: 0px, ...) {\n    border: @arguments;\n    width: @width;\n}\n\n.arguments {\n    .mixin-arguments(1px, solid, black);\n}\n.arguments2 {\n    .mixin-arguments();\n}\n.arguments3 {\n    .mixin-arguments();\n}\n\n.mixin-arguments2 (@width, @rest...) {\n    border: @arguments;\n    rest: @rest;\n    width: @width;\n}\n.arguments4 {\n    .mixin-arguments2(0, 1, 2, 3, 4);\n}\n\n// Edge cases\n\n.edge-case {\n    .mixin-arguments("{");\n}\n\n// Division vs. Literal Slash\n.border-radius(@r: 2px/5px) {\n  border-radius: @r;\n}\n.slash-vs-math {\n  .border-radius();\n  .border-radius(5px/10px);\n  .border-radius((3px * 2));\n}\n// semi-colon vs comma for delimiting\n\n.mixin-takes-one(@a) {\n    one: @a;\n}\n\n.mixin-takes-two(@a; @b) {\n    one: @a;\n    two: @b;\n}\n\n.comma-vs-semi-colon {\n    .mixin-takes-two(@a : a; @b : b, c);\n    .mixin-takes-two(@a : d, e; @b : f);\n    .mixin-takes-one(@a: g);\n    .mixin-takes-one(@a : h;);\n    .mixin-takes-one(i);\n    .mixin-takes-one(j;);\n    .mixin-takes-two(k, l);\n    .mixin-takes-one(m, n;);\n    .mixin-takes-two(o, p; q);\n    .mixin-takes-two(r, s; t;);\n}\n\n.mixin-conflict(@a:defA, @b:defB, @c:defC) {\n  three: @a, @b, @c;\n}\n\n.mixin-conflict(@a:defA, @b:defB, @c:defC, @d:defD) {\n  four: @a, @b, @c, @d;\n}\n\n#named-conflict {\n  .mixin-conflict(11, 12, 13, @a:a);\n  .mixin-conflict(@a:a, 21, 22, 23);\n}\n@a: 3px;\n.mixin-default-arg(@a: 1px, @b: @a, @c: @b) {\n  defaults: 1px 1px 1px;\n  defaults: 2px 2px 2px;\n}\n\n.test-rule-mixin-default-arg {\n  .mixin-default-arg();\n  .mixin-default-arg(2px);\n}\n\n.mixin-comma-default1(@color; @padding; @margin: 2, 2, 2, 2) {\n  margin: @margin;\n}\n.selector {\n  .mixin-comma-default1(#33acfe; 4);\n}\n.mixin-comma-default2(@margin: 2, 2, 2, 2;) {\n  margin: @margin;\n}\n.selector2 {\n  .mixin-comma-default2();\n}\n.mixin-comma-default3(@margin: 2, 2, 2, 2) {\n  margin: @margin;\n}\n.selector3 {\n  .mixin-comma-default3(4,2,2,2);\n}\n\n.test-rule-calling-one-arg-mixin(@a) {\n}\n\n.test-rule-calling-one-arg-mixin(@a, @b, @rest...) {\n}\n\ndiv {\n  .test-rule-calling-one-arg-mixin(1);\n}\n\nmixins-args-expand-op- {\n  @x: 1, 2, 3;\n  @y: 4  5  6;\n\n  &1 {.m3(@x...)}\n  &2 {.m3(@y...)}\n  &3 {.wr(a, b, c)}\n  &4 {.wr(a; b; c, d)}\n  &5 {.wr(@x...)}\n  &6 {.m4(0; @x...)}\n  &7 {.m4(@x..., @a: 0)}\n  &8 {.m4(@b: 1.5; @x...)}\n  &9 {.aa(@y, @x..., and again, @y...)}\n\n  .m3(@a, @b, @c) {\n    m3: @a, @b, @c;\n  }\n\n  .m4(@a, @b, @c, @d) {\n    m4: @a, @b, @c, @d;\n  }\n\n  .wr(@a...) {\n    &a {.m3(@a...)}\n    &b {.m4(0, @a...)}\n    &c {.m4(@a..., 4)}\n  }\n\n  .aa(@a...) {\n    aa: @a;\n    a4: extract(@a, 5);\n    a8: extract(@a, 8);\n  }\n}\n#test-mixin-matching-when-default-2645 {\n  .mixin(@height) {\n    height: @height;\n  }\n\n  .mixin(@width, @height: 10px) {\n    width: @width;\n\n    .mixin(@height: @height);\n  }\n\n  .mixin(@height: 20px);\n}',
  },
  {
    name: 'tests-config/math-parens-division/new-division.less',
    input:
      '.units {\n  font: 1.2rem/2rem;\n  font: 8vw/9vw;\n  font: 10vh/12vh;\n  font: 12vm/15vm;\n  font: 12vmin/15vmin;\n  font: 1.2ch/1.5ch;\n}\n\n.math {\n  a: 1 + 1;\n  b: 2px / 2;\n  c: 2px ./ 2;\n  d: (10px / 10px);\n  e: ((16px ./ 2) / 2) / 2;\n  f: ((16px ./ 2) / 2) ./ 2;\n}',
  },
  {
    name: 'tests-config/math-parens-division/parens.less',
    input:
      '.parens-issues-3616 {\n  bar: if(false, 666, 888 / 444);\n  bar2: if(false, 666, (666 / 333));\n  bar3: if(false, 666, ((444 / 222)));\n}\n\n.parens {\n  @var: 1px;\n  border: (@var * 2) solid black;\n  margin: (@var * 1) (@var + 2) (4 * 4) 3;\n  width: (6 * 6);\n  padding: 2px (6 * 6px);\n}\n\n.more-parens {\n  @var: (2 * 2);\n  padding: (2 * @var) 4 4 (@var * 1px);\n  width-all: ((@var * @var) * 6);\n  width-first: ((@var * @var)) * 6;\n  width-keep: (@var * @var) * 6;\n  height: calc(100% + (25vh - 20px));\n  height-keep: (7 * 7) + (8 * 8);\n  height-all: ((7 * 7) + (8 * 8));\n  height-parts: ((7 * 7)) + ((8 * 8));\n  margin-keep: (4 * (5 + 5) / 2) - (@var * 2);\n  margin-parts: ((4 * (5 + 5) / 2)) - ((@var * 2));\n  margin-all: ((4 * (5 + 5) / 2) + (-(@var * 2)));\n  border-radius-keep: 4px * (1 + 1) / @var + 3px;\n  border-radius-parts: ((4px * (1 + 1))) / ((@var + 3px));\n  border-radius-all: (4px * (1 + 1) / @var + 3px);\n  // margin: (6 * 6)px;\n}\n\n.negative {\n  @var: 1;\n  neg-var: -@var; // -1 ?\n  neg-var-paren: -(@var); // -(1) ?\n}\n\n.nested-parens {\n  width: 2 * (4 * (2 + (1 + 6))) - 1;\n  height: ((2 + 3) * (2 + 3) / (9 - 4)) + 1;\n}\n\n.mixed-units {\n  margin: 2px 4em 1 5pc;\n  padding: (2px + 4px) 1em 2px 2;\n}\n\n.test-rule-false-negatives {\n  a: ~"(";\n}\n',
  },
  {
    name: 'tests-config/math-always/mixins-guards.less',
    input:
      '// https://github.com/less/less.js/issues/2798\n.test-rule-2798 when ((8+4) < 13) { \n  regression: fixed; \n}\n.test-rule-2798 when ((8+6) < 13) { \n  regression: should not be visible; \n}\n.conditions-parser-1 when (8+4 < 13) {\n  only-atomic: ok;\n}\n.conditions-parser-1 when (8+6 < 13) {\n  only-atomic: should not be visible;\n}\n.conditions-parser-2 when (8+(5-1) < 13) {\n  only-atomic-with-nested-parenthesis: ok;\n}\n.conditions-parser-2 when (8+(15-1) < 13) {\n  only-atomic-with-nested-parenthesis: should not be visible;\n}\n.conditions-parser-3 when (8 < (13+1)) {\n  only-atomic-nested-parenthesis-on-right: ok;\n}\n.conditions-parser-3 when (8 < (3+1)) {\n  only-atomic-nested-parenthesis-on-right: should not be visible;\n}\n',
  },
  {
    name: 'tests-config/math-always/no-sm-operations.less',
    input:
      '.named-colors-in-expressions {\n    color-0: 0 -red;  \n    color-1: 1 - red; \n    color-2: red * 2;\n    color-3: 2 * red;\n    @3: -red;\n    &-bar@{3} {x: y}\n    @color: red;\n    &-bar@{color} {a: a};\n    background-color: blue-2;\n    color: green-black;\n    animation: blue-change 5s infinite;\n}\n.division {\n    value: ((16px ./ 2) / 2) / 2;\n}',
  },
  {
    name: 'tests-config/js-type-errors/js-type-error.less',
    input: '.scope {\n  var: `this.foo.toJS`;\n}\n',
  },
  {
    name: 'tests-config/include-path-string/include-path-string.less',
    input: "data-uri {\n  property: data-uri('image.svg');\n}\n",
  },
  {
    name: 'tests-config/include-path/import-test-e.less',
    input: '\nbody { width: 100% }\n',
  },
  {
    name: 'tests-config/include-path/include-path.less',
    input:
      "@import \"import-test-e\";\n\ndata-uri {\n  property: data-uri('image.svg');\n}\nimage-size {\n  property: image-size('image.svg');\n}\n",
  },
  {
    name: 'tests-config/import-redirect/import-redirect.less',
    input:
      '@import "https://example.com/redirect.less";\n\nh1 { color: red; }\n',
  },
  {
    name: 'tests-config/globalVars/extended.less',
    input:
      '#header {\n  color: (@base-color * 3);\n  border-left: @the-border;\n  border-right: (@the-border * 2);\n}\n#footer {\n  color: (@base-color + #003300);\n  border-color: @red;\n}\n@red: desaturate(red, 10%); // less file overrides passed in color <- note line comment on last line to check it is okay',
  },
  {
    name: 'tests-config/globalVars/simple.less',
    input: '.class {\n  color: @my-color;\n}',
  },
  {
    name: 'tests-config/filemanagerPlugin/filemanager.less',
    input: '@import "test.test";\n.test-rule {\n    color: @color;\n}\n',
  },
  {
    name: 'tests-config/debug/linenumbers.less',
    input:
      '@charset "UTF-8";\n\n@import "import/test.less";\n\n.start() {\n  .test-rule2 {\n      color: red;\n  }\n}\n\n.mix() {\n    color: black;\n}\n\n.test-rule1 {\n  .mix();\n}\n\n.start();\n\n.mixin_import1();\n\n.mixin_import2();\n\n@debug: 1;\n& when (@debug = 1) {\n  .test-rule {\n    color: red;\n    & when (@debug = 1) {\n      width: 2;\n    }\n  }\n}\n\n.supports-rule {\n  @supports (display: grid) {\n    color: green;\n    .nested-supports {\n      color: blue;\n    }\n  }\n}',
  },
  {
    name: 'tests-config/debug/mediaquery/linenumbers-mediaquery.less',
    input:
      '// Entry file for -mediaquery configuration\n@import "../linenumbers.less";\n',
  },
  {
    name: 'tests-config/debug/import/test.less',
    input:
      '@charset "ISO-8859-1";\n\n.mixin_import1() {\n    @media all {\n        .tst {\n            color: black;\n            @media screen {\n                color: red;\n                .tst3 {\n                    color: inherit;\n                }\n            }\n        }\n    }\n}\n\n.mixin_import2() {\n    .tst2 {\n        color: inherit;\n    }\n}\n\n.tst3 {\n    color: grey;\n}',
  },
  {
    name: 'tests-config/debug/comments/linenumbers-comments.less',
    input:
      '// Entry file for -comments configuration\n@import "../linenumbers.less";\n',
  },
  {
    name: 'tests-config/debug/all/linenumbers-all.less',
    input:
      '// Entry file for -all configuration\n@import "../linenumbers.less";\n',
  },
  {
    name: 'tests-config/compression/compression.less',
    input:
      '#colours {\n  color1: #fea;\n  color2: #ffeeaa;\n  color3: rgba(255, 238, 170, 0.1);\n  @color1: #fea;\n  string: "@{color1}";\n  /* comments are stripped */\n  // both types!\n  /*! but not this type\n      Note preserved whitespace\n  */\n}\ndimensions {\n  val: 0.1px;\n  val: 0em;\n  val: 4cm;\n  val: 0.2;\n  val: 5;\n  angles-must-have-unit: 0deg;\n  durations-must-have-unit: 0s;\n  length-doesnt-have-unit: 0px;\n  width: auto\\9;\n}\n@page  {\n  marks: none;\n@top-left-corner {\n  vertical-align: top;\n}\n@top-left {\n  vertical-align: top;\n}\n}\n.shadow ^ .dom,\nbody ^^ .shadow {\n  display: done;\n}\n',
  },
  {
    name: 'tests-config/at-rules-compressed-evaluation/at-rules-compressed-evaluation.less',
    input:
      '// Test at-rule evaluation paths (eval, evalRoot, genCSS, accept, etc.)\n\n// Test keywordList - @media with keyword list\n@media screen, print, handheld {\n  body {\n    font-size: 12pt;\n  }\n}\n\n// Test declarationsBlock with mergeable=true (nested ruleset with declarations)\n@media screen {\n  .container {\n    color: red;\n    background: blue;\n  }\n}\n\n// Test simpleBlock optimization with allRulesetDeclarations (single ruleset)\n@media screen {\n  .test {\n    color: red;\n    background: blue;\n  }\n}\n\n// Test eval with value evaluation and keywordList conversion\n@breakpoint: screen;\n@media @breakpoint, print {\n  body {\n    margin: 0;\n  }\n}\n\n// Test evalRoot with ampersand handling\n.container {\n  @media screen {\n    & {\n      color: red;\n    }\n    .child {\n      color: blue;\n    }\n  }\n}\n\n// Test evalRoot with mixed ampersands\n.wrapper {\n  .inner {\n    @media screen {\n      & {\n        color: green;\n      }\n    }\n  }\n}\n\n// Test genCSS with value\n@charset "UTF-8";\n\n// Test genCSS with simpleBlock\n@page {\n  margin: 2cm;\n  size: A4;\n}\n\n// Test genCSS with rules (non-simpleBlock)\n@supports (display: grid) {\n  .grid {\n    display: grid;\n  }\n  .flex {\n    display: flex;\n  }\n}\n\n// Test isCharset\n@charset "UTF-8";\n\n// Test isRulesetLike (non-charset)\n@media screen {\n  body {\n    color: black;\n  }\n}\n\n// Test compressed output (outputRuleset compressed path)\n@layer base {\n  body {\n    margin: 0;\n  }\n  p {\n    padding: 0;\n  }\n}\n\n// Test variable/find/rulesets delegation\n@media screen {\n  @var: value;\n  .test {\n    color: @var;\n  }\n}\n\n// Test eval with media bubbling\n@media screen {\n  @media print {\n    body {\n      color: black;\n    }\n  }\n}\n\n',
  },
  {
    name: 'tests-config/at-rules-compressed/at-rules-compressed.less',
    input:
      '// Tests for atrule.js coverage - compressed output path (lines 243-250)\n// Also covers parser + genCSS + outputRuleset\n\n// Compressed @media with rules\n@media screen {\n  body { margin: 0; }\n  p { padding: 0; }\n}\n\n// Compressed @layer with multiple rules\n@layer base {\n  body { margin: 0; }\n  p { padding: 0; }\n  div { border: 0; }\n}\n\n// Compressed @supports\n@supports (display: grid) {\n  .grid { display: grid; }\n  .item { grid-column: 1; }\n}\n\n// Compressed @page\n@page {\n  margin: 2cm;\n  size: A4;\n}\n\n// Compressed @keyframes\n@keyframes slide {\n  from { transform: translateX(0); }\n  to { transform: translateX(100px); }\n}\n\n',
  },
  {
    name: 'tests-config/3rd-party/bootstrap4.less',
    input: '@import "bootstrap-less-port/less/bootstrap";',
  },
  {
    name: 'plugin/plugin-transitive.less',
    input:
      '@plugin "plugin-transitive";\n\n.other {\n  trans : test-transitive();\n}',
  },
]
