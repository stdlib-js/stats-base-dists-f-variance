/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* F distribution variance.
*
* @module @stdlib/stats-base-dists-f-variance
*
* @example
* var variance = require( '@stdlib/stats-base-dists-f-variance' );
*
* var v = variance( 3.0, 5.0 );
* // returns ~11.111
*
* v = variance( 4.0, 12.0 );
* // returns ~1.26
*
* v = variance( 8.0, 5.0 );
* // returns ~7.639
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
