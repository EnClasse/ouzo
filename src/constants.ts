/**
 * @internal
 */
export const greeklishMap = [
	{ find: 'ΓΧ', replace: 'GX' },
	{ find: 'γχ', replace: 'gx' },
	{ find: 'αυ', replace: 'au' },
	{ find: 'Αυ', replace: 'Au' },
	{ find: 'ΑΥ', replace: 'AY' },
	{ find: 'ευ', replace: 'eu' },
	{ find: 'εύ', replace: 'eu' },
	{ find: 'εϋ', replace: 'ey' },
	{ find: 'εΰ', replace: 'ey' },
	{ find: 'Ευ', replace: 'Eu' },
	{ find: 'Εύ', replace: 'Eu' },
	{ find: 'Εϋ', replace: 'Ey' },
	{ find: 'Εΰ', replace: 'Ey' },
	{ find: 'ΕΥ', replace: 'EY' },
	{ find: 'ου', replace: 'ou' },
	{ find: 'ού', replace: 'ou' },
	{ find: 'οϋ', replace: 'oy' },
	{ find: 'οΰ', replace: 'oy' },
	{ find: 'Ου', replace: 'Ou' },
	{ find: 'Ού', replace: 'Ou' },
	{ find: 'Οϋ', replace: 'Oy' },
	{ find: 'Οΰ', replace: 'Oy' },
	{ find: 'ΟΥ', replace: 'OY' },
	{ find: 'Α', replace: 'A' },
	{ find: 'α', replace: 'a' },
	{ find: 'ά', replace: 'a' },
	{ find: 'Ά', replace: 'A' },
	{ find: 'Β', replace: 'B' },
	{ find: 'β', replace: 'b' },
	{ find: 'Γ', replace: 'G' },
	{ find: 'γ', replace: 'g' },
	{ find: 'Δ', replace: 'D' },
	{ find: 'δ', replace: 'd' },
	{ find: 'Ε', replace: 'E' },
	{ find: 'ε', replace: 'e' },
	{ find: 'έ', replace: 'e' },
	{ find: 'Έ', replace: 'E' },
	{ find: 'Ζ', replace: 'Z' },
	{ find: 'ζ', replace: 'z' },
	{ find: 'Η', replace: 'I' },
	{ find: 'η', replace: 'i' },
	{ find: 'ή', replace: 'i' },
	{ find: 'Ή', replace: 'I' },
	{ find: 'Θ', replace: 'TH' },
	{ find: 'θ', replace: 'th' },
	{ find: 'Ι', replace: 'I' },
	{ find: 'Ϊ', replace: 'I' },
	{ find: 'ι', replace: 'i' },
	{ find: 'ί', replace: 'i' },
	{ find: 'ΐ', replace: 'i' },
	{ find: 'ϊ', replace: 'i' },
	{ find: 'Ί', replace: 'I' },
	{ find: 'Κ', replace: 'K' },
	{ find: 'κ', replace: 'k' },
	{ find: 'Λ', replace: 'L' },
	{ find: 'λ', replace: 'l' },
	{ find: 'Μ', replace: 'M' },
	{ find: 'μ', replace: 'm' },
	{ find: 'Ν', replace: 'N' },
	{ find: 'ν', replace: 'n' },
	{ find: 'Ξ', replace: 'KS' },
	{ find: 'ξ', replace: 'ks' },
	{ find: 'Ο', replace: 'O' },
	{ find: 'ο', replace: 'o' },
	{ find: 'Ό', replace: 'O' },
	{ find: 'ό', replace: 'o' },
	{ find: 'Π', replace: 'P' },
	{ find: 'π', replace: 'p' },
	{ find: 'Ρ', replace: 'R' },
	{ find: 'ρ', replace: 'r' },
	{ find: 'Σ', replace: 'S' },
	{ find: 'σ', replace: 's' },
	{ find: 'Τ', replace: 'T' },
	{ find: 'τ', replace: 't' },
	{ find: 'Υ', replace: 'Y' },
	{ find: 'Ύ', replace: 'Y' },
	{ find: 'Ϋ', replace: 'Y' },
	{ find: 'ΰ', replace: 'y' },
	{ find: 'ύ', replace: 'y' },
	{ find: 'ϋ', replace: 'y' },
	{ find: 'υ', replace: 'y' },
	{ find: 'Φ', replace: 'F' },
	{ find: 'φ', replace: 'f' },
	{ find: 'Χ', replace: 'X' },
	{ find: 'χ', replace: 'x' },
	{ find: 'Ψ', replace: 'Ps' },
	{ find: 'ψ', replace: 'ps' },
	{ find: 'Ω', replace: 'w' },
	{ find: 'ω', replace: 'w' },
	{ find: 'Ώ', replace: 'w' },
	{ find: 'ώ', replace: 'w' },
	{ find: 'ς', replace: 's' },
	{ find: ';', replace: '?' }
];

/**
 * @internal
 * Vowels without any stress marks
 */
export const vowelsWT = ['α', 'ε', 'η', 'ι', 'υ', 'ο', 'ω'];

/**
 * @internal
 * Vowels with some kind of stress mark
 */
export const vowelsT = ['ά', 'έ', 'ή', 'ί', 'ύ', 'ό', 'ώ', 'ϊ', 'ΐ'];

/**
 * @internal
 */
export const maleIsNormalized = ['Άγις', 'Άδωνις', 'Αναξίπολις', 'Βάκις', 'Βόρις', 'Θέογνις', 'Θέσπις', 'Πάρις', 'Ναθαναήλ'].map((s) =>
	s
		.toLocaleLowerCase()
		.split('')
		.map((c) => c.normalize('NFD').charAt(0))
		.join('')
);
