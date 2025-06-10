import React from 'react';

const NoteList = ({notes, setnotes}) => {
  function handleDelete(id) {
    setnotes(notes.filter(note => note.id !== id));
  }
  
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '40px 20px',
      fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '50px'
        }}>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '12px',
            letterSpacing: '-1.5px',
            fontFamily: '"Poppins", "Inter", sans-serif'
          }}>
            My Notes
          </h1>
          <p style={{
            color: '#666',
            fontSize: '18px',
            fontWeight: '500',
            fontFamily: '"Inter", sans-serif'
          }}>
            {notes.length === 0 ? 'No notes yet' : `${notes.length} note${notes.length !== 1 ? 's' : ''} in your collection`}
          </p>
        </div>
        
        {notes.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '80px 40px',
            background: 'rgba(255,255,255,0.8)',
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              fontSize: '80px',
              marginBottom: '20px',
              opacity: '0.5'
            }}>
              📝
            </div>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#333',
              marginBottom: '12px',
              fontFamily: '"Poppins", "Inter", sans-serif'
            }}>
              No Notes Yet
            </h2>
            <p style={{
              color: '#666',
              fontSize: '16px',
              marginBottom: '30px',
              fontFamily: '"Inter", sans-serif'
            }}>
              Start capturing your thoughts and ideas!
            </p>
            <a 
              href="/create"
              style={{
                display: 'inline-block',
                padding: '14px 28px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #ff6b6b, #ff8e53)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: '0 6px 20px rgba(255,107,107,0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 30px rgba(255,107,107,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 6px 20px rgba(255,107,107,0.3)';
              }}
            >
              ✨ Create Your First Note
            </a>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '25px'
          }}>
            {notes.map((note, index) => (
              <div 
                key={note.id} 
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: `hsl(${(index * 137.5) % 360}, 70%, 60%)`
                }} />
                
                <div style={{
                  fontSize: '12px',
                  color: '#999',
                  fontWeight: '600',
                  marginBottom: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontFamily: '"Inter", sans-serif'
                }}>
                  {formatDate(note.id)}
                </div>
                
                <p style={{
                  color: '#333',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  marginBottom: '25px',
                  fontWeight: '400',
                  fontFamily: '"SF Pro Text", "Inter", system-ui, sans-serif',
                  wordBreak: 'break-word',
                  maxHeight: '120px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '4',
                  WebkitBoxOrient: 'vertical'
                }}>
                  {note.content}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    fontSize: '13px',
                    color: '#999',
                    fontWeight: '500',
                    fontFamily: '"Inter", sans-serif'
                  }}>
                    {note.content.length} characters
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(note.id);
                    }}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '25px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #ff6b6b, #ff8e53)',
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      boxShadow: '0 4px 15px rgba(255,107,107,0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(255,107,107,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(255,107,107,0.3)';
                    }}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteList;