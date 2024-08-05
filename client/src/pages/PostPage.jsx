import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaShare } from 'react-icons/fa';
import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchRecentPosts();
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: `Check out this post: ${post.title}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );

  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className='self-center mt-5'
      >
        <Button color='gray' pill size='xs'>
          {post && post.category}
        </Button>
      </Link>
      <div className="mt-10 w-full overflow-hidden rounded-3xl shadow-lg border-2 border-teal-500">
        <img
          src={post && post.image}
          alt={post && post.title}
          className='w-full object-cover max-h-[400px]'
        />
        <div
          className='p-6 bg-slate-600 text-white flex flex-col justify-between '
          dangerouslySetInnerHTML={{ __html: post && post.content }}
        ></div>
      </div>
      <div className='flex justify-between p-3 border-b border-slate-500 w-full text-xs'>
        <span className="pt-2">{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <div className='flex items-center gap-2'>
          <span className='italic'>
            {post && (post.content.length / 1000).toFixed(0)} mins read
          </span>
          <Button
            onClick={handleShare}
          >
            <FaShare />
            Share
          </Button>
        </div>
      </div>
      <CommentSection postId={post && post._id} />
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        <h1 className='text-xl mt-5'>Recent articles</h1>
        <div className='flex flex-wrap gap-4 sm:flex-nowrap  lg:gap-8'>
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}