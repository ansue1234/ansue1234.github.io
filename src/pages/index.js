import React, {useState} from "react"
import { css } from "@emotion/react"
import { Card, CardActionArea, CardHeader, CardContent, IconButton, Chip } from '@material-ui/core'
import {Face, Textsms, ArrowLeft, ArrowRight} from '@material-ui/icons'
import { rhythm } from "../utils/typography"
import {graphql} from 'gatsby'
import Scroll from '../components/scrollButton'
import Logo from '../components/contactIcons'
// import song from '../audio/FourSeasons.mp3'
// import ReactAudioPlayer from 'react-audio-player'
// import {withStyles} from '@material-ui/core/styles';


// const ResizableIconButton = ({classes, size, ...props}) =>
//     <IconButton className={classes[size]}
//                 {...props}/>;

// const styles = {
//     small: {
//         '& svg': {
//             fontSize: 18
//         }
//     },
//     medium: {
//         '& svg': {
//             fontSize: 24
//         }
//     },
//     large: {
//         '& svg': {
//             fontSize: 60
//         }
//     }
// };
function mod(n, m) {
  return ((n % m) + m) % m;
}

export default function Home({ data }) {
  // const But = withStyles(styles)(ResizableIconButton);
  const [counter, setCounter] = useState(0);
  // const [play, setPlay] = useState(false);
  // const [audio, setAudio] = useState(new Audio(song));
  const nodes = data.allMdx.nodes;
  const len = nodes.length;


  // function click(play) {
  //   setPlay(!play);
  //   const audio = document.getElementById("audio");
  //   // console.log(audio.audioEl.play)
  //   if (play) {
  //     audio.play();
  //   } else {
  //     audio.pause();
  //   }
  // }

  return (
    <div>
      <Scroll direction='Down'/>
      <Logo/>
      {/* <audio src={song} loop={true} id="audio"/> 
          or enjoy some  <button onClick={()=>(click(play))}>Vivaldi!</button>  
          */}
    <div css={css`        
      margin: 0 auto;
      max-width: 800px;
      padding: ${rhythm(0)};
      padding-top: ${rhythm(1.5)};
      background-color: #FFFFFF;
      margin-bottom: 3rem
     `}>
      <div css={css`padding-top: 5rem; margin-bottom:3rem`}>
        <h1 css={css`text-align: center`}>Hello!</h1>
        <h2 css={css`text-align: center`}>Welcome to the personal site of Andrew Sue (me)!</h2>
        <p css={css`text-align: center`}>Play around, click on random things, view my <a href="projects/" style={{display: "inline-block"}}>projects!</a></p>
      </div>
      <div css={css`display: flex`}>
        <div css={css`margin-right: auto; margin-left: auto;`}>
          <h3>About Me</h3>
          <IconButton 
            color='primary' 
            aria-label='About Me' 
            href={'contents/About/'} 
            css={css`text-decoration: none !important;`}
            size='medium' >
              <Face/>
          </IconButton>
        </div>
        <div css={css`margin-right: auto; margin-left: auto;`}>
          <h3>Contact Me</h3>
          <IconButton color='primary' aria-label='Contact Me' href={'contents/Contact/'} css={css`text-decoration: none !important; `} size='medium'><Textsms/></IconButton>
        </div>
      </div>
      <div css={css`margin-top: 8rem; margin-bottom: 3rem`}>
        <h3>Project Gallery (<a href='projects/'>View all</a>)</h3>
      </div>
      <div css={css`display: flex;`}>
        <IconButton color='primary' aria-label='previous' onClick={()=>(setCounter(mod(counter-1, len)))} css={css`text-decoration: none !important; margin: auto`} size='medium'><ArrowLeft/></IconButton>
        <Card variant = "outlined" css={css`width: 30rem; margin:auto;`}>
          <CardActionArea href = {`${nodes[counter].slug}/`}>
              <CardContent>
                  <ul css = {css`
                              overflow-x: auto;
                              margin:auto
                              `}>
                      {nodes[counter].frontmatter.tags.map((tag)=>{
                          return(
                              <li id={tag}  key={tag} css={css`display: inline-block; margin: 0px`}>
                                  <Chip key={tag} label={tag} css={css`margin: 0px`}/>
                              </li>
                          )
                      })}
                  </ul>
              </CardContent>
              <CardHeader css={css`text-align: center`} title = {nodes[counter].frontmatter.title} titleTypographyProps={{variant: 'subtitle1'}}/>
              <CardContent css={css`text-align: center; padding-bottom: 2rem`}>{nodes[counter].frontmatter.description}</CardContent>
          </CardActionArea>
        </Card>
        <IconButton color='primary' aria-label='previous' onClick={()=>(setCounter(mod(counter+1, len)))} css={css`text-decoration: none !important; margin: auto`} size='medium'><ArrowRight/></IconButton>
      </div>
        
    </div>
    </div>
  )
  
}

export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {category: {eq: "projects"}}}) {
      nodes {
        id
        frontmatter {
          title
          tags
          description
        }
        slug
      }
    }
  }
`
