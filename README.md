# Presentation about <add subject here>

Add description here.

See this presentation in [here](<url where the presentation is served>).


# Presentation Template

This presentation template uses the [remarkjs](https://remarkjs.com/) framework.
Check it's documentation for basic usage.

This template configures remarkjs to use an external markdown file
`presentation.md`. It also add a few extra css classes, some that can be applied
to a slide, some that can be applied to divs and some that can be applied to
spans. Check `presentation.md`, which illustrates the usage of the created
classes. It can be seen [here](https://darcamo.github.io/remarkjs_template).

Below you can find a list of the classes added by this template.

## Classes for slides

Remarkjs support adding classes to slides putting `class:class1, class2, ...` in
the beginning of the slide. The classes added by this template that can be added
to slides are:

- inverse, middle, center
- img-caption -> add to a slide with just a picture and some text
- hide-slide-number
- hide-logo
- overlay-blend -> has an effect only when there is a background image and a background color with "0 < opacity < 1"
- The classes from [animate.css](https://daneden.github.io/animate.css/)
- dontanimate -> use in "step" slides if you have animated a slide entrance with animate.css to disable the animation

## Classes you can add to spans and divs

- .moody.labeled.box
- .moody.alert
- footnote
- cite
- strike
- extra-top-bottom-margin
- auto-left-right-margin
- columns
  - column -> add a column inside the columns
  - Add 'w-10, w-20, ...' class to the same element with the column class for a width proportion
  - Add a 'align-top', '\'align-middle\' or 'align-middle' class to the column


## Debug spacing

Add a `debug`, `debug-white` or `debug-black` class to a slide to help debugging
spacing. You can also add one of the `debug-grid` or `debug-grid-16`,
`debug-grid-8-solid` or `debug-grid-16-solid` to add a grid.


## Macros

Some remarkjs macros are defined for common things. They are used as 
`![macroname: arg1, arg2, ...]` or `![macroname: arg1, arg2, ...](content)`.
The available macros are

- `box`: receives one or two arguments and must have content.
  - The first argument is a class for the box color (moody, happy, angry, or
    anything else you defined in css.
  - The second argument is an optional box label
- `toc`: receives two arguments corresponding to the start/end indexes and has
  no content.
- `captionedfigure`: receives one argument corresponding to the caption and has content (the URL of the image)
- `note`: Receives one or two arguments and must have content
  - The note is just a box with a default "Note" label
  - the first argument is a class for the box color (same as the `box` macro)
  - The second argument is the note label
- `qrcode`: has no argument but must have content containing the text to convert
  to a QR code. The content usually is just a URL.
