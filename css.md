---
title: CSS
layout: default
---

[CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
[CSS3 clickchart](http://css3clickchart.com/#box-sizing)
[CSS values](http://cssvalues.com)
[CSS3 test](http://css3test.com/)
[Magic Of CSS](http://adamschwartz.co/magic-of-css/)

Selectors
---------

    =  [attr="value"]       - exact
    ~= [class~="box"]       - has word
    |= [class|="icon"]      - exact, or prefix (eg, value-)
    $= [href$=".doc"]       - ends in
    *= [class*="-is-"]      - contains

    + adjacent sibling
    ~ far sibling
    > direct child

    :target (h2#foo:target)
    :disabled

    :nth-child
    :nth-child(3n)
    :nth-child(3n+2)
    :nth-child(-n+4)
    :nth-last-child(...)

    :first-of-type
    :last-of-type
    :nth-of-type
    :only-of-type   - only child of its parent thats like that

    :only-child


Background
----------

### Shorthand

    background: <color> <image> <position> <size> <repeat> <attachment> <clip>

    # Example:
    background: #ff0 url(bg.jpg) center top no-repeat fixed

### Other properties

    background-clip: border-box | padding-box | content-box [, ...]*

    background-repeat: no-repeat | repeat-x | repeat-y

    background-attachment: scroll | fixed | local

### Compatibility

  - background-clip: IE9+
  - Multiple backgrounds: IE9+

Animations
----------

### Shorthand

    animation: <name> <duration> <timing-function> <delay> <count> <direction> <fill-mode>

    # Example:
    animation: bounce 300ms linear 0s infinite normal
    animation: bounce 300ms linear infinite

### Other properties

    animation-direction: normal | reverse | alternate | alternate-reverse

    animation-iteration-count: infinite | <number>

Webkit extensions
-----------------

### Font smoothing

    /* maxvoltar.com/archive/-webkit-font-smoothing */
    * {
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale;
    }

### Heading kerning pairs and ligature

    h1, h2, h3 { text-rendering: optimizeLegibility; }

### Native-like iOS scrolling

    -webkit-overflow-scrolling: touch;
    overflow-y: auto;

### Gradient text

    background: -webkit-gradient(linear, left top, left bottom, from(#eee), to(#333));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

### Text stroke

    /* http://www.webkit.org/blog/85/introducing-text-stroke/ */
    -webkit-text-stroke: 3px black;

### iOS Scrolling prevention

    document.ontouchstart = (e) ->
      $pane = $(e.target).closest('.scrollable>div')
      if $pane.length is 0 or $pane[0].scrollHeight <= $pane.innerHeight()
        e.preventDefault()

    %ios-scrollable
      &, >div
        -webkit-overflow-scrolling: touch
        overflow: auto

      >div
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0

### UIWebView optimizations

    /* http://www.bitsandpix.com/entry/ios-webkit-uiwebview-remove-tapclick-highlightborder-with-css/ */
    /* 
       http://www.yuiblog.com/blog/2010/10/01/quick-tip-customizing-the-mobile-safari-tap-highlight-color/ 
     */

    * {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-user-select: none;                /* disable text select */
      -webkit-touch-callout: none;              /* disable callout, image save panel (popup) */
      -webkit-tap-highlight-color: transparent; /* "turn off" link highlight */
    }

    a:focus {
      outline:0; // Firefox (remove border on link click)
    }

Browser hacks
-------------

Not recommended, but here they are if you ever need them. Note that vendor 
prefixes may go away eventually.

### Mozilla-only

    @-moz-document url-prefix() {
      .box { color: blue; }
    }

### Webkit-only

    @media all and (-webkit-min-device-pixel-ratio: 1) {
    }
