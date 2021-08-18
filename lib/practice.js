import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const practiceDirectory = path.join(process.cwd(), 'pages/practice')

export function getPracticeData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(practiceDirectory)
  return fileNames.map(fileName => {
    const id = fileName
    // Combine the data with the id
    return {
      id
    }
  })

}

