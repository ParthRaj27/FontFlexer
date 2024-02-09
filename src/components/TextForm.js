import React , {useState} from 'react'
// rfc



export default function TextForm(props) {
    const handleCountSentences = () => {
        const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '').length;
        alert(`Number of sentences: ${sentenceCount}`);
    }
    
    const handleExtractEmails = () => {
        const emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
        alert(`Extracted emails:\n${emails.join('\n')}`);
    }
    
    const handleExtractURLs = () => {
        const urls = text.match(/(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*|www\.[^\s]+/g) || [];
        alert(`Extracted URLs:\n${urls.join('\n')}`);
    }
    
    const handleClearFormatting = () => {
        // You can add more complex logic here to clear any additional formatting
        let newText = text.replace(/<[^>]*>/g, ''); // Removes HTML tags
        setText(newText);
    }
    
    const handlePascalCase = () => {
        let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
        setText(newText);
    }
    
    // const handleCountWords = () => {
    //     const wordCount = text.split(/\s+/).filter(word => word.length !== 0).length;
    //     alert(`Number of words: ${wordCount}`);
    // }
    
    // const handleCountCharacters = () => {
    //     const characterCount = text.length;
    //     alert(`Number of characters: ${characterCount}`);
    // }
    
    // const handleGenerateLoremIpsum = () => {
    //     // You can replace this with your own Lorem Ipsum generator logic
    //     const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    //     setText(loremIpsum);
    // }
    
    const handleEncodeBase64 = () => {
        const encodedText = btoa(text);
        setText(encodedText);
    }
    
    const handleDecodeBase64 = () => {
        try {
            const decodedText = atob(text);
            setText(decodedText);
        } catch (error) {
            alert("Invalid Base64 string!");
        }
    }
    
    const handleCountVowels = () => {
        const vowelCount = text.match(/[aeiou]/gi)?.length || 0;
        alert(`Number of vowels: ${vowelCount}`);
    }
    
    const handleCountConsonants = () => {
        const consonantCount = text.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
        alert(`Number of consonants: ${consonantCount}`);
    }
    
    const handleRemoveExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ');
        setText(newText.trim());
    }
    
    const handleReverseWords = () => {
        let newText = text.split(/\s+/).reverse().join(' ');
        setText(newText);
    }
    
    const handleReverseClick = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
    }
    
    const handleCapitalizeClick = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
    }
    
    const handleTitleCaseClick = () => {
        let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
    }
    
    const handleCamelCaseClick = () => {
        let newText = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
        setText(newText);
    }
    
    const handleSnakeCaseClick = () => {
        let newText = text.toLowerCase().replace(/\s+/g, '_');
        setText(newText);
    }
    
    const handleUpClick = () => {
        // console.log("clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleClearClick = () => {
        // console.log("clicked")
        let newText = '';
        setText(newText)
    }
    const handleCopyClick = () => {
        // console.log("clicked")
        // var text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges()
        // setText(newText)
    }
    const handleLowClick = () => {
        // console.log("clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleSpaces = () => {
        // console.log("clicked")
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text , setText] = useState('');
    // text = "asasasa" //wrong way to change state of the state
    // setText("asasasa") //corect way to change state of the state
  return (
    <>
    <div className='container'  style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2 className='mb-4'>{props.heading}</h2>
        <div className="mb-3">
        {/* <label htmlFor="myBox" className='form-lable1'>Enter Your Text</label> */}
        <textarea className='form-control'  style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}}    value={text}  onChange={handleOnChange} id="myBox" cols="30" rows="10" placeholder='Enter Something to Active Buttons'></textarea>
      </div>
      <button disabled={text.length===0}  onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Convert To Upper Case</button>
      <button disabled={text.length===0}  onClick={handleLowClick} className="btn btn-primary mx-2 my-2">Convert To Lower Case</button>
      <button disabled={text.length===0}  onClick={handleClearClick} className="btn btn-primary mx-2 my-2">Clear</button>
      <button disabled={text.length===0}  onClick={handleCopyClick} className="btn btn-primary mx-2 my-2">Copy Text</button>
      <button disabled={text.length===0}  onClick={handleSpaces} className="btn btn-primary mx-2 my-2">handle Spaces</button>
      <button disabled={text.length===0} onClick={handleReverseClick} className="btn btn-primary mx-2 my-2">Reverse Text</button>
        <button disabled={text.length===0} onClick={handleCapitalizeClick} className="btn btn-primary mx-2 my-2">Capitalize Text</button>
        <button disabled={text.length===0} onClick={handleTitleCaseClick} className="btn btn-primary mx-2 my-2">Title Case</button>
        <button disabled={text.length===0} onClick={handleCamelCaseClick} className="btn btn-primary mx-2 my-2">Camel Case</button>
        <button disabled={text.length===0} onClick={handlePascalCase} className="btn btn-primary mx-2 my-2">Convert to PascalCase</button>

        <button disabled={text.length===0} onClick={handleSnakeCaseClick} className="btn btn-primary mx-2 my-2">Snake Case</button>
        <button disabled={text.length===0} onClick={handleCountVowels} className="btn btn-primary mx-2 my-2">Count Vowels</button>
<button disabled={text.length===0} onClick={handleCountConsonants} className="btn btn-primary mx-2 my-2">Count Consonants</button>
<button disabled={text.length===0} onClick={handleRemoveExtraSpaces} className="btn btn-primary mx-2 my-2">Remove Extra Spaces</button>
<button disabled={text.length===0} onClick={handleReverseWords} className="btn btn-primary mx-2 my-2">Reverse Words</button>
{/* <button disabled={text.length===0} onClick={handleCountWords} className="btn btn-primary mx-2 my-2">Count Words</button>
<button disabled={text.length===0} onClick={handleCountCharacters} className="btn btn-primary mx-2 my-2">Count Characters</button> */}
{/* <button disabled={text.length===0} onClick={handleGenerateLoremIpsum} className="btn btn-primary mx-2 my-2">Generate Lorem Ipsum</button> */}
<button disabled={text.length===0} onClick={handleEncodeBase64} className="btn btn-primary mx-2 my-2">Encode Base64</button>
<button disabled={text.length===0} onClick={handleDecodeBase64} className="btn btn-primary mx-2 my-2">Decode Base64</button>
<button disabled={text.length===0} onClick={handleCountSentences} className="btn btn-primary mx-2 my-2">Count Sentences</button>
<button disabled={text.length===0} onClick={handleExtractEmails} className="btn btn-primary mx-2 my-2">Extract Emails</button>
<button disabled={text.length===0} onClick={handleExtractURLs} className="btn btn-primary mx-2 my-2">Extract URLs</button>
<button disabled={text.length===0} onClick={handleClearFormatting} className="btn btn-primary mx-2 my-2">Clear Formatting</button>



    </div>
    <div className="container my-5" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
        <p>{60 * 0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} seconds to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text : "Nothing To Preview"}</p>
    </div>
    {/* /\s+/<-- Java Script Regex */}
    </>
  )
}
