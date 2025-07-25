"use client"
import { useState } from "react"
import { Share2, Bookmark, Heart } from "lucide-react"
import styles from "./page.module.css"

export function BlogPostActions() {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className={styles.articleActions}>
      <button className={`${styles.actionBtn} ${isLiked ? styles.liked : ""}`} onClick={() => setIsLiked(!isLiked)}>
        <Heart size={16} />
        <span>{isLiked ? "Liked" : "Like"}</span>
      </button>
      <button
        className={`${styles.actionBtn} ${isBookmarked ? styles.bookmarked : ""}`}
        onClick={() => setIsBookmarked(!isBookmarked)}
      >
        <Bookmark size={16} />
        <span>{isBookmarked ? "Saved" : "Save"}</span>
      </button>
      <button className={styles.actionBtn}>
        <Share2 size={16} />
        <span>Share</span>
      </button>
    </div>
  )
}
