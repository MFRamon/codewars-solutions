// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// By Ramon Manrique Figueroa

export function reverseWords(str: string): string {
    // Transform the string into an array
    let stringArray: string[] = str.split(" ")
      
    //Reverse each substring in its own place
    stringArray = stringArray.map((element) => {
      return [...element].reverse().join("");
    }) 
                     
    let cleanedString: string = stringArray.toString().replaceAll(',', ' ')
    return cleanedString;
}