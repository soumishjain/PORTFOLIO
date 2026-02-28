import { useEffect, useState } from "react";

const words = [
  "Web Developer",
  "Competitive Programmer",
  "Learner",
];

const Typewriter = () => {

    const [text,setText] = useState("")
    const [wordIndex ,setWordIndex] = useState(0)
    const [isDeleting,setIsDeleting] = useState(false)

    useEffect(() => {
  const currentWord = words[wordIndex];
  let typingSpeed = isDeleting ? 50 : 100;

  const timeout = setTimeout(() => {

    if (!isDeleting) {
      setText(currentWord.substring(0, text.length + 1));

      if (text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

    } else {
      setText(currentWord.substring(0, text.length - 1));

      if (text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

  }, typingSpeed);

  return () => clearTimeout(timeout);

}, [text, isDeleting, wordIndex]);


  return (
    <div className="text-white text-2xl font-medium">
      {text}
      <span className="animate-blink"></span>
    </div>
  )
}

export default Typewriter
