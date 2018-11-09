const fs = require( 'fs' );
const terser = require( 'terser' );

const options = {
	toplevel: true,

	mangle: true,
	nameCache: {
		vars: {
			props: {
				$add: 'foo'
			}
		},
		props: {
			props: {}
		}
	}
};

const codeB = fs.readFileSync( 'src/a.js' ).toString();
const codeA = fs.readFileSync( 'src/b.js' ).toString();

const outputA = terser.minify( codeA, options );
const outputB = terser.minify( codeB, options );

console.log( options.nameCache );

console.log( outputA, outputB );