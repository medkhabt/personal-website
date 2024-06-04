/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
        colors: {
            'cyber-grape' : '#4E4175', 
            'grullo' : '#A8938A', 
            'peach-orange' : '#EFC79B', 
            'bittersweet-shimmer' : '#C75252', 
            'back-main' : '#ffffff', 
            'std-main' : '#f1f0ef', 
            'less-main' : '#204473', 
            'first-accent' : '#00477c',
            'second-accent' : '#BF8578'
        },
        backgroundImage: {
            // 'profil' : "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('resources/img/me.jpeg')", 
            'profil' : "url('./pages/img/me.jpeg')", 
            'githubbl' : "url('resources/img/github_transparent_blue.png')",
            'githubbr' : "url('resources/img/github_transparent_brown.png')",
            'linkedinbl' : "url('resources/img/linkedin_blue.png')",
            'linkedinbr' : "url('resources/img/linkedin_brown.png')",
        }, 
        backgroundSize: {
            '50%' : '50%', 
            '75%' : '75%', 
            '25%' : '25%',
            '100%' : '100%',
            '400%' : '400%',
            '300%' : '300%',
            '200%' : '200%',
            '90%' : '90%',
            '80%' : '80%',
            '70%' : '70%',
            '60%' : '60%',
        },
        spacing: {
            '2/3-screen': '70vh',
            'half-screen': '50vh',
            '200%': '200%'
        },
        gridTemplateColumns: {
            'root-2' : '1fr 0.414fr', 
            'root-3' : '1fr 0.73fr',
            'reversed-root-3' : '0.73fr 1fr',
            'reversed-root-2-internal': '0.711fr 0.289fr', 
            'root-2-internal': '0.289fr 0.711fr', 
        },
        gridTemplateRows: {
            'root-2' : '1fr 0.414fr', 
            'root-3' : '1fr 0.73fr',
            'reversed-root-2-internal': '0.711fr 0.289fr', 
            'root-2-internal': '0.289fr 0.711fr', 
            'projects-1' : '2fr 4fr 1fr',
        }
    },
  },
  plugins: [],
}

