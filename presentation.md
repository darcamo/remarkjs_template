

class: center, middle, hide-slide-number, hide-logo
background-image: url(figs/circles.svg)
background-size: cover
background-position: 0 50px
name: title-slide

.titleblock[
# Presentation Title
## A remark.js template
]

.authorsblock[
Carlos Silva, Igor Guerreiro, Tarcisio Maciel, .presenter[Rodrigo Cavalcanti], Daniel
Araújo, and Hugo Costa Neto

![logo](figs/logo.svg)

Some Text Some Text Some Text

October 18, 2018
]

.footnote[Created with [{Remark.js}](http://remarkjs.com/) using
[{Markdown}](https://daringfireball.net/projects/markdown/) +
[{MathJax}](https://www.mathjax.org/)]

---

class:middle, hide-logo, hide-slide-number

# .center[Agenda]

![:toc 2, 20]

---

# This is the slide tittle

## This is a subtitle

Nam euismod tellus id erat.

- Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
- Nam euismod tellus id erat.
  - Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
  - Fusce commodo.
     - Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
- Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

1. Phasellus neque orci, porta a, aliquet quis, semper a, massa.
2. Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.

---

# A slide with Blocks
## Three available colors and labeled vs unlabeled blocks

.center[.happy.alert[lalala lalala lalala]
.moody.alert[lalala lalala lalala]
.angry.alert[lalala lalala lalala]]


<!-- Similar to before, but using HTML to create the box -->
<div class="angry labeled box">
    <div class="label">An angry labeled box</div>
    <p>bla bla bla</p>
    <p>bla bla bla</p>
</div>


[//]: # (Note that the new line after the label is important)
.moody.labeled.box[.label[A moody labeled box]

bla bla bla

bla bla bla]

[//]: # (Similar to before, but using a macro to create the box)
[//]: # (Note that after ':box' you add the classes then add a comma followed by the label)
[//]: # (The limitation of the macro version is that the content cannot have a close parentheses)
![:box happy, A box with a list](
- item 1
- item 2)

[//]: # (If a label is not provided it also works)
![:box moody](
A moody box without a label
- an item)

---

# A slide with Math, footnote and a citation

The equation is given by [.cite[Some guy (2018)]]

$$y = ax^2+bx+c$$

Oops, the equation above is .strike[wrong] imprecise. The correct equation is

$$\vtY = \mtH\vtX+\vtZ$$


.footnote[The math is typeset using [MathJax](https://www.mathjax.org/)]

---

# A slide with a Code Block

Some python code

```python
for i in range(10):
    print(i)
```

Some C++ code

```c++
#include <iostream>

int main() {
    std::cout << "Hello World" << std::endl;
}
```

---

# A slide with code inside a labeled box
## Same blocks as before, but without padding around the content

<div class="moody zeropadded labeled box">
<span class="label">Some Python Code</span>
<pre><code class="python">for i in range(10):
    print(i)</code></pre>
</div>


.moody.zeropadded.labeled.box[
.label[
Some Python Code]
```python
for i in range(10):
    print(i)
```
]



.moody.zeropadded.labeled.box[
.label[
Some C++ Code]
```c++
#include <iostream>

int main() {
    std::cout << "Hello World" << std::endl;
}
```
]

---

# A slide with two columns

Notice how the columns align and the proportion of each column.

.columns[
.column.w-30.align-middle[
Middle aligned column vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv

vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv
]

.column.w-40[
Not specifically aligned, but it is the largest column aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa

aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa

aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
]

.column.w-30.align-bottom[
bottom aligned column zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz

zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz
]]


Some text after the columns, which can now again span the whole line

---
# A slide with two columns

Here the `align-middle` class was added to the columns and the last column has the `align-bottom` class

.columns.align-middle[
.column.w-20[
vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv vvv
]

.column.w-30[
aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa
]

.column.w-20[
zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz zzz
]

.column.w-30.align-bottom[
bottom aligned column hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh hhh
]
]

Some text after the columns, which can now again span the whole line

---

# Figures with caption

For this you can use HTML


<div class="columns zeropadded box moody">
  <figure>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Emoji_u1f648.svg" alt="Mizaru">
    <figcaption><em>Mizaru</em> (see no evil)</figcaption>
  </figure>
  <figure>
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Emoji_u1f649.svg" alt="Kikazaru">
    <figcaption><em>Kikazaru</em> (hear no evil)</figcaption>
  </figure>
  <figure>
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Emoji_u1f64a.svg" alt="Iwazaru">
    <figcaption><em>Iwazaru</em> (speak no evil)</figcaption>
  </figure>
</div>


You can also use the `captionedfigure` macro

.zeropadded.box.moody.columns[
![:captionedfigure *Mizaru* (see no evil)](https://upload.wikimedia.org/wikipedia/commons/6/6e/Emoji_u1f648.svg)

![:captionedfigure *Kikazaru* (hear no evil)](https://upload.wikimedia.org/wikipedia/commons/5/56/Emoji_u1f649.svg)

![:captionedfigure *Iwazaru* (speak no evil)](https://upload.wikimedia.org/wikipedia/commons/2/2c/Emoji_u1f64a.svg)
]

---

class: inverse, center, middle

# A slide with the inverse class
## Isn't it great?


.extra-top-bottom-margin[
Usually you want to also add the 'center' and 'middle' classes to the slide.]

.footnote[When both inverse and middle classes are added to a slide the font size of paragraph is larger and h1 and h2 font is different.]

---

class: img-caption

![image](figs/a_beautiful_picture.jpg)


This is a beautiful picture with a caption below.


---

background-image: url(figs/a_beautiful_picture.jpg)
background-size: cover

class: inverse

# A slide with a background image

We can have content as before.

- item 1
- item 2

Because this image is somewhat dark, we also add the inverse class to change the
colors. But this might not be enough.


---
background-image: url(figs/a_beautiful_picture.jpg)
background-size: cover
background-color: rgb(255, 255, 255, 0.8)

class: overlay-blend, hide-logo

# A slide with a background color combined with a background image

Now we have the same image as before, but we also set the background color and
add the overlay-blend class to the slide.

![:note angry](The background color needs to have an opacity value greater than
zero and lower than one in order for the overlay to work)

---


# A slide with a table


.auto-left-right-margin.extra-top-bottom-margin[

| Some text         | Some text              | Some text      |   Some text       |
| :---------------: | :--------------------: | :------------: | :---------------: |
| some text some    | some text              | some text      | some text         |
| some text         | some text some text    | text           | text              |
| some text some    | text                   | some text      | text              |
]


---

# You can combine columns and figs

.columns.align-middle[
.column.w-40[
.moody.labeled.box[
.label[Lala]

- Some text
- Some text
]
.happy.labeled.box[
.label[Lala]

- Some text
- Some text
]
.angry.labeled.box[
.label[Lala]

- Some text
- Some text
]
]
.column.w-40[
![:captionedfigure *Mizaru* (see no evil)](https://upload.wikimedia.org/wikipedia/commons/6/6e/Emoji_u1f648.svg)

![:captionedfigure *Kikazaru* (hear no evil)](https://upload.wikimedia.org/wikipedia/commons/5/56/Emoji_u1f649.svg)

![:captionedfigure *Iwazaru* (speak no evil)](https://upload.wikimedia.org/wikipedia/commons/2/2c/Emoji_u1f64a.svg)
]]

---

# Animations

- Simply showing an item at a time can be done in remarkjs when you separate content using `--`

--


![:box moody, Example](Like this box, that is only appearing now)

--

- If you add the `css/slide_transitions.css` in `index.html` then slide transitions will have a fade in effect.

--

.animated.bounceInLeft[
## One more thing]

.animated.bounceInRight[
- You can also use CSS animations for some extra goodies
- For instance, with `animate.css` all you need to do is to add the `animated`
  class as well as `<desired_animation_class>` to an element
  - See https://daneden.github.io/animate.css/ for available animations
  - See more in https://github.com/daneden/animate.css for other options .alert.angry[(speed, delay, etc)]
  - You can also use other css code from the internet or create you own
- .alert.angry[Make sure the element is a block element for the animation to work]
  - Or set it's display property to inline-block
]

---

class: animated, jackInTheBox

# You can also animate the transition of a specific slide

- Just add `animated` and `<desired_animation_class>` as slide classes
  - This slide has the `animated` and `jackInTheBox` classes
--

class: dontanimate
- Remember to add the `dontanimate` class to the first step to stop animating
  the whole slide
--

- See how this step didn't animate the whole slide again?
--

- All subsequent steps will not be animated
--

- You can also create a template with animation using remark `template` such
  that for specific slides you just use the template with the desired animation
  - Ex: create a template for splash slides!



---
name: more-animations-1

# JavaScript animations on specific slides

[//]: # (.animated.slideInDown[)
[//]: # (bla bla bla)
[//]: # (])

- If you need to animated something with JavaScript, you can name each slide and
then use the `showSlide` event to test for a specific name and call the
JavaScript code
  - This slide has name `more-animations-1`
  - When you name a slide, the slide DOM element gets its id attribute set to slide-<name>
--

name: more-animations-2
- Notice that you can give a name property to each individual slide step
  - This step has the name `more-animations-2` and a log message saying "Yahooo more-animations-2" is sent only on this step
--

name: more-animations-3

<div style="background-color: rgb(230, 230, 230); width: calc(200px); border: 4px solid purple;">
<div id="square" style="width: 100px; height: 100px; background-color: red; position: relative; transition: transform 0.8s;"></div>
<div id="animationStep" style="font-size: 75%; float:right; margin-top: 4px;"></div>
</div>

- In this step we added a square that will be moved with javascript.

  In the `showSlide` event for this step we capture the left/right arrow
  keypress events for the square movement. When the in the end of the movement
  we reenable the events in remarkjs

---

# Pull-left, Pull-right

.pull-right.width-30[![squares](figs/squares.svg)]


- Etiam vel neque nec dui dignissim bibendum.
- Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Mauris ac felis vel velit tristique imperdiet.



.clear-both[
This text has a clear-both class and will definitely not be around the squares]

---
name: chartslide
# A chart example

- Notice that the chart is interactive ➤ Try clicking the lagend
  - You could also add more interaction such as new data appearing and updating
    the line, for instance

<div class="chart-container" style="width:80%; height: 400px; margin: 50px auto;">
<canvas id="myChart"></canvas>
</div>


---

# More css

Some other elements with css are:
- kbd: <kbd>Ctrl</kbd> <kbd>y</kbd>
- Blockquote:
  > Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.
  > -- <cite>Albert Einstein</cite>

---

# TIPs

- You can get nice general pictures from specialized sites such as https://unsplash.com/
  - Better than just googling

---
class: middle, center, hide-slide-number, hide-logo

.typewriter[
# Thank You
]

.animated.fadeIn.delay-2s[
Scan this code for this presentation URL

![:qrcode](https://www.google.com)
]

.contactblock[
.presenter[Darlan Cavalcante Moreira: [darlan@gtel.ufc.br](mailto:darlan@gtel.ufc.br)]<br />
.home[GTEL - Wireless Telecom Research Group]<br />
.webpage[https://www.gtel.ufc.br]<br />
.location[Fortaleza, Brazil]
]
