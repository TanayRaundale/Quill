import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NoteForm = ({notes, setnotes}) => {
  const [text, setText] = useState('');
  const nav = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    const newNote = {id: Date.now(), content: text};
    setnotes([...notes, newNote]);
    nav('/');
  }
  
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '40px 20px',
      fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '24px',
        padding: '40px 35px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '35px'
        }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '12px',
            letterSpacing: '-1.2px',
            fontFamily: '"Poppins", "Inter", sans-serif'
          }}>
            Create New Note
          </h1>
          <p style={{
            color: '#666',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: '"Inter", sans-serif'
          }}>
            Capture your thoughts and ideas ✨
          </p>
        </div>
        
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px'
        }}>
          <div style={{ position: 'relative' }}>
            <textarea
              rows="12"
              placeholder="Start writing your note here... 📝"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '6px',
                border: '2px solid rgba(102,126,234,0.1)',
                borderRadius: '16px',
                fontSize: '16px',
                fontFamily: '"SF Pro Text", "Inter", "Segoe UI", system-ui, sans-serif',
                fontWeight: '400',
                lineHeight: '1.6',
                resize: 'vertical',
                minHeight: '180px',
                background: 'rgba(255,255,255,0.8)',
                transition: 'all 0.3s ease',
                outline: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                color: '#333'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#667eea';
                e.target.style.boxShadow = '0 8px 30px rgba(102,126,234,0.15)';
                e.target.style.background = 'rgba(255,255,255,1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(102,126,234,0.1)';
                e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                e.target.style.background = 'rgba(255,255,255,0.8)';
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '15px',
              right: '20px',
              color: '#999',
              fontSize: '13px',
              fontWeight: '500',
              fontFamily: '"Inter", sans-serif'
            }}>
              {text.length} characters
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center'
          }}>
            <button 
              type="button"
              onClick={() => nav('/')}
              style={{
                padding: '16px 32px',
                borderRadius: '50px',
                border: '2px solid #e0e0e0',
                background: 'transparent',
                color: '#666',
                fontSize: '15px',
                fontWeight: '700',
                fontFamily: '"Inter", sans-serif',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#ff6b6b';
                e.target.style.color = '#ff6b6b';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#e0e0e0';
                e.target.style.color = '#666';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Cancel
            </button>
            
            <button 
              type="submit"
              style={{
                padding: '16px 40px',
                borderRadius: '50px',
                border: 'none',
                background: 'linear-gradient(135deg, #67b26f, #4ca2cd)',
                color: 'white',
                fontSize: '15px',
                fontWeight: '700',
                fontFamily: '"Inter", sans-serif',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: '0 6px 20px rgba(103,178,111,0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 30px rgba(103,178,111,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 6px 20px rgba(103,178,111,0.3)';
              }}
            >
              💾 Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;