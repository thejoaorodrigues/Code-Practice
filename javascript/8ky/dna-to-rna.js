/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    //Declare rna varible to hold the new string
    let rna = ""
    //Loop through the dna sequence
    for(i=0; i<dna.length; i++){
        //If element = 'T', replace it by U and push it to rnd
        if(dna[i] === 'T'){
        rna += 'U'
      } else {
        //Else, push to rna the actual element
        rna += dna[i]
      }
    }
    //Return the rna string
    return rna
}