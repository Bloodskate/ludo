
//Constants

const red_home_squares = [
  "a00", "b00", "c00", "d00", "e00", "f00",
  "a01", /*"b01",*/ "c01", "d01", /*"e01",*/ "f01",
  "a02", "b02", "c02", "d02", "e02", "f02",
  "a03", "b03", "c03", "d03", "e03", "f03",
  "a04", /*"b04",*/ "c04", "d04", /*"e04",*/ "f04",
  "a05", "b05", "c05", "d05", "e05", "f05"
];

const blue_home_squares = [
  "j00", "k00", "l00", "m00", "n00", "o00",
  "j01", /*"k01",*/ "l01", "m01", /*"n01",*/ "o01",
  "j02", "k02", "l02", "m02", "n02", "o02",
  "j03", "k03", "l03", "m03", "n03", "o03",
  "j04", /*"k04",*/ "l04", "m04", /*"n04",*/ "o04",
  "j05", "k05", "l05", "m05", "n05", "o05",
];

const yellow_home_squares = [
  "j09", "k09", "l09", "m09", "n09", "o09",
  "j10", /*"k10",*/ "l10", "m10", /*"n10",*/ "o10",
  "j11", "k11", "l11", "m11", "n11", "o11",
  "j12", "k12", "l12", "m12", "n12", "o12",
  "j13", /*"k13",*/ "l13", "m13", /*"n13",*/ "o13",
  "j14", "k14", "l14", "m14", "n14", "o14",
];

const green_home_squares = [
  "a09", "b09", "c09", "d09", "e09", "f09",
  "a10", /*"b10",*/ "c10", "d10", /*"e10",*/ "f10",
  "a11", "b11", "c11", "d11", "e11", "f11",
  "a12", "b12", "c12", "d12", "e12", "f12",
  "a13", /*"b13",*/ "c13", "d13", /*"e13",*/ "f13",
  "a14", "b14", "c14", "d14", "e14", "f14",
];

const red_end_path_squares = [
  "b07", "c07", "d07", "e07", "f07", "g07"
];

const blue_end_path_squares = [
  "h01", "h02", "h03", "h04", "h05", "h06" 
];

const yellow_end_path_squares = [
  "i07", "j07", "k07", "l07", "m07", "n07" 
];

const green_end_path_squares = [
  "h08", "h09", "h10", "h11", "h12", "h13" 
];

const red_start_square = "b06";
const blue_start_square = "i01";
const yellow_start_square = "n08";
const green_start_square = "g13";


// Exports

export const colNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];

export const home = {
  red: red_home_squares,
  blue: blue_home_squares,
  green: green_home_squares,
  yellow: yellow_home_squares
}

export const end_path = {
  red: red_end_path_squares,
  blue: blue_end_path_squares,
  green: green_end_path_squares,
  yellow: yellow_end_path_squares
}

export const start = {
  red: red_start_square,
  blue: blue_start_square,
  green: green_start_square,
  yellow: yellow_start_square
}

export const safe_states = [
  "g02", "m06", "c08", "i12" 
];

export const end_states = [
  "g07", "h06", "h08", "i07"
];

//out of bounds
export const oob_states = [
  "g06", "g08", "i06", "i08", "h07"
];

export const token_dead_pos = [
  'b01', 'e01', 'b04', 'e04', 'k01', 'n01', 'k04', 'n04', 'k10', 'n10', 'k13', 'n13', 'b10', 'e10', 'b13', 'e13' 
];
