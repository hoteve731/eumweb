import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import fireStore from '../../firestore'; // Firestore 인스턴스 임포트
import { doc, getDoc } from "firebase/firestore";

export default function Post() {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { postId } = router.query;

  useEffect(() => {
    async function fetchPost() {
      if (postId) {
        const docRef = doc(fireStore, "feeds", postId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          // 문서가 존재하지 않을 경우
          setPost(null);
        }
      }
    }

    fetchPost();
  }, [postId]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
