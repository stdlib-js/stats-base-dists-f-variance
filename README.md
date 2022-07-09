<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Variance

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [F][f-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][variance] for a [F][f-distribution] random variable is

<!-- <equation class="equation" label="eq:f_variance" align="center" raw="\operatorname{Var}\left( X \right) = \frac{2\,d_{2}^{2}\,(d_{1}+d_{2}-2)}{d_{1}(d_{2}-2)^{2}(d_{2}-4)}" alt="Variance for an F distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Var}\left( X \right) = \frac{2\,d_{2}^{2}\,(d_{1}+d_{2}-2)}{d_{1}(d_{2}-2)^{2}(d_{2}-4)}" data-equation="eq:f_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/f/variance/docs/img/equation_f_variance.svg" alt="Variance for an F distribution.">
    <br>
</div>

<!-- </equation> -->

for `d1 > 0` and `d2 > 4`. Otherwise, the variance is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import variance from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-variance@deno/mod.js';
```

#### variance( d1, d2 )

Returns the [variance][variance] of a [F][f-distribution] distribution with parameters `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom).

```javascript
var v = variance( 4.0, 5.0 );
// returns ~9.722

v = variance( 4.0, 12.0 );
// returns ~1.26

v = variance( 8.0, 5.0 );
// returns ~7.639
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = variance( NaN, 5.0 );
// returns NaN

v = variance( 3.0, NaN );
// returns NaN
```

If provided `d1 <= 0`, the function returns `NaN`.

```javascript
var v = variance( 0.0, 5.0 );
// returns NaN

v = variance( -1.0, 5.0 );
// returns NaN
```

If provided `d2 <= 4`, the function returns `NaN`.

```javascript
var v = variance( 3.0, 4.0 );
// returns NaN

v = variance( 3.0, -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import EPS from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@deno/mod.js';
import variance from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-variance@deno/mod.js';

var d1;
var d2;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    d1 = ( randu()*10.0 ) + EPS;
    d2 = ( randu()*20.0 ) + EPS;
    v = variance( d1, d2 );
    console.log( 'd1: %d, d2: %d, Var(X;d1,d2): %d', d1.toFixed( 4 ), d2.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-f-variance.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-f-variance

[test-image]: https://github.com/stdlib-js/stats-base-dists-f-variance/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-f-variance/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-f-variance/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-f-variance?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-f-variance.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-f-variance/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-f-variance/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-f-variance/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-f-variance/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-f-variance/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-f-variance/main/LICENSE

[f-distribution]: https://en.wikipedia.org/wiki/F_distribution

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
