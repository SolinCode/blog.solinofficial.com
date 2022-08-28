---
title: "Пример статьи"
date: 1970-01-01
tags:
    - test
preview: 'Статья где показаны все фукнции markdown'
---

## Заголовок 2
### Заголовок 3
#### Заголовок 4
##### Заголовок 5
###### Заголовок 6

## Пример параграфа

Lorem ipsum dolor sit amet. Sed inventore perferendis id voluptas quasi aut adipisci fugiat quo iste tempore rem delectus tenetur eos temporibus consectetur in quidem molestiae. Est quidem tenetur et dolore consequatur et fugit nemo At soluta aperiam eos eveniet quis. Ea eligendi consequatur et galisum ratione ab beatae neque est optio quibusdam sed veniam porro ut ipsum quam. Aut dolore nemo ab voluptate enim est mollitia voluptas.

Et reprehenderit dolores est quam laboriosam ea maiores odio quo quisquam pariatur et eveniet facilis est accusantium possimus ab provident provident. Et animi et ducimus rerum vel magni laudantium id quisquam impedit et consequatur molestiae est accusantium ipsa ut voluptatem doloremque! Sit quae veniam quo porro enim ut impedit similique.

Aut illum illum eum sequi omnis in temporibus labore. Aut quia necessitatibus est culpa voluptatem hic quis dolores qui repudiandae velit. Vel optio ducimus eos libero earum ut ipsum sint qui sunt ullam. Aut nihil quidem sit quas nihil eum excepturi provident aut iusto ratione et quas enim rem accusamus voluptatem.


## Вставка кода

```
{
    "private": true,
    "scripts": {
        "start": "npx eleventy --serve --quiet",
        "build": "echo y|rmdir /s dist && npx eleventy && gulp",
        "deploy": "cd dist && rsync --archive --compress --delete . solin@solin.vps:/var/www/blog.solinofficial.com"
    },
    "bugs": {
        "url": "https://github.com/SolinCode/blog.solinofficial.com/issues"
    },
    "homepage": "https://blog.solinofficial.com",
    "dependencies": {
        "@11ty/eleventy": "^1.0.2",
        "del": "^6.0.0",
        "gulp-clean-css": "^4.3.0",
        "gulp-copy": "^4.0.1",
        "gulp-htmlmin": "^5.0.1"
    },
    "devDependencies": {
        "gulp": "^4.0.2"
    }
}
```

---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so