import React, {useState} from "react"
import Layout from "../components/layout"
import {GridList, GridListTile, Card, CardActionArea, CardHeader, CardContent} from "@material-ui/core"
import { css } from "@emotion/react"
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import {Button} from '@material-ui/core'
import { graphql } from 'gatsby'
import { useTheme } from '@material-ui/core/styles';


function getProj(nodes, selectedTags) {
    let articles = [];
    for (let node of nodes) {
        var allIncluded = true;
        for (let tag of selectedTags) {
            if (!node.frontmatter.tags.includes(tag)) {
                allIncluded = false;
                break;
            }
        }
        if (allIncluded) {
            articles.push(node);
        }
    }
    return articles.sort((a, b)=>(a.frontmatter.priority - b.frontmatter.priority));
}



function getStyles(tag, tags, theme) {
    return {
      fontWeight:
        tags.indexOf(tag) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

export default function Projects({ data }) {
  const theme = useTheme();
  const [selectedTags, setSelectedTags] = useState([]);
//   const chip = styled.Chip`
//                 margin: 2px`

//     const chips = styled.div`
//                     display: flex;
//                     flex-wrap: wrap;`
                    
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                margin: 30,
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        getContentAnchorEl: null
    };

  const handleChange = (event) => {
    setSelectedTags(event.target.value);
  };

  let tags = new Set();
  
  for (let node of data.allMdx.nodes) {
    for (let tag of node.frontmatter.tags) {
        tags.add(tag);
    }
  }

  tags = Array.from(tags)

  return (
      <div>
        <Layout>
            <h1>Projects</h1>
            <p>Here is a list of all my projects, feel free to poke around!</p>
            <div css={css`display: flex; flex-direction: row`}>
                <FormControl css={css`min-width: 140px; max-width: 300px; height: 50px; padding-bottom: 20px`}>
                    <InputLabel id="select-tags-label" css={css`padding-bottom: 10px`}>Sort by tags</InputLabel>
                    <Select
                        labelId="Select-tags"
                        id="select-tags"
                        multiple
                        value={selectedTags}
                        onChange={handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div css={css`display: flex; flex-wrap: wrap;`}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} css={css`margin: 2px`}/>
                            ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                    {tags.map((tag) => (
                        <MenuItem key={tag} value={tag} style={getStyles(tag, tags, theme)}>
                        {tag}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>  
                <Button variant='contained' color='primary' size="small" css={css`text-transform: none; height: 30px; margin-top: 20px`} onClick = {() => (setSelectedTags([]))}>All Projects</Button>
            </div>
            <GridList cols={3} cellHeight = {300} css={css`padding-top: 2.5rem`}>
                {getProj(data.allMdx.nodes, selectedTags).map((node) => (
                    <GridListTile key={node.frontmatter.title}>
                        <Card variant = "outlined" >
                            <CardActionArea href = {`../${node.slug}/`} style={{height: 300}}>
                                <CardHeader title = {node.frontmatter.title} titleTypographyProps={{variant: 'subtitle1'}}/>
                                <CardContent>{node.frontmatter.description}</CardContent>
                                <CardContent>
                                    <ul css = {css`
                                                overflow-x: auto;
                                                `}>
                                        {node.frontmatter.tags.map((tag)=>{
                                            return(
                                                <li id={tag}  css={css`display: inline-block; margin: 0px`}>
                                                    <Chip key={tag} label={tag} css={css`margin: 0px`}/>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </GridListTile>
                ))}
            </GridList>
        </Layout>
        
      </div>
  )
  
}


export const query = graphql`
  query MyQuery {
    allMdx(filter: {frontmatter: {category: {eq: "projects"}}}) {
      nodes {
        id
        frontmatter {
          title
          tags
          description
          priority
        }
        slug
      }
    }
  }
`
