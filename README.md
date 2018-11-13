
# A remarkjs template

This presentation template uses the [remarkjs](https://remarkjs.com/) framework.
Check it's documentation for basic usage.

This template configures remarkjs to use an external markdown file
`presentation.md`. It also add a few extra css classes, some that can be applied
to a slide, some that can be applied to divs and some that can be applied to
spans. Check the `presentation.md` for the usage.

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

