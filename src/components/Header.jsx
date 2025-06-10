import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav style={{
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px 40px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif'
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{
        fontSize: '28px',
        fontWeight: '800',
        color: '#fff',
        letterSpacing: '-0.8px',
        textShadow: '0 2px 4px rgba(0,0,0,0.2)',
        fontFamily: '"Poppins", "Inter", sans-serif'
      }}>
        ✒️ Quill
      </div>
      
      <div style={{ display: 'flex', gap: '25px' }}>
        <Link 
          to="/" 
          style={{ 
            color: '#fff', 
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: '25px',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            fontWeight: '600',
            fontSize: '14px',
            letterSpacing: '0.8px',
            fontFamily: '"Inter", sans-serif',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.25)';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,255,255,0.15)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          📖 All Notes
        </Link>
        
        <Link 
          to="/create" 
          style={{ 
            color: '#fff', 
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: '25px',
            background: 'linear-gradient(135deg, #ff6b6b, #ff8e53)',
            border: 'none',
            fontWeight: '700',
            fontSize: '14px',
            letterSpacing: '0.8px',
            fontFamily: '"Inter", sans-serif',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
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
          ✨ Create Note
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;