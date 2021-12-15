import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Post title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Post body for Drive links:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Who posted:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="ahmet">ahmet</option>
          <option value="cem">cem</option>
          <option value="aleyna">aleyna</option>
          <option value="defne">defne</option>
        </select>
        <label>Bpm:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="0-10">0-10</option>
          <option value="10-20">10-20</option>
          <option value="20-30">20-30</option>
          <option value="30-40">30-40</option>
          <option value="40-50">40-50</option>
          <option value="50-60">50-60</option>
          <option value="60-70">60-70</option>
          <option value="70-80">70-80</option>
          <option value="80-90">80-90</option>
          <option value="90-100">90-100</option>
          <option value="100-110">100-110</option>
          <option value="110-120">110-120</option>
          <option value="120-130">120-130</option>
          <option value="130-140">130-140</option>
          <option value="140-150">140-150</option>
          <option value="150-160">150-160</option>
          <option value="160-170">160-170</option>
          <option value="170-180">170-180</option>
          <option value="180-190">180-190</option>
          <option value="190-200">190-200</option>
        </select>
        <label>Musical genre type:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Pop">Pop</option>
          <option value="Country">Country</option>
          <option value="Hip Hop">Hip Hop</option>
          <option value="Classical">Classical</option>
          <option value="Disco">Disco</option>
          <option value="Blues">Blues</option>
        </select>
        <button>Add Post</button>
      </form>
    </div>
  );
}
 
export default Create;