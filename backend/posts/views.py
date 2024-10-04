from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Post, Comment, Like, Category, Tag
from .serializers import PostSerializer, CommentSerializer, LikeSerializer, CategorySerializer, TagSerializer

# Post Views
class PostCreateView(generics.CreateAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Post.objects.all()

# Like Views
class LikeCreateView(generics.CreateAPIView):
    serializer_class = LikeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, post_id):
        user = request.user
        post = Post.objects.get(postid=post_id)
        like, created = Like.objects.get_or_create(user=user, post=post)
        
        if not created:
            return Response({"message": "You have already liked this post"}, status=400)
        
        return Response({"message": "Post liked successfully"})

class LikeDeleteView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request, post_id):
        user = request.user
        try:
            like = Like.objects.get(user=user, post_id=post_id)
            like.delete()
            return Response({"message": "Like removed successfully"})
        except Like.DoesNotExist:
            return Response({"message": "You haven't liked this post"}, status=404)

# Comment Views
class CommentCreateView(generics.CreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CommentDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Comment.objects.all()

# Category Views
class CategoryCreateView(generics.CreateAPIView):
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]

class CategoryUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Category.objects.all()

# Tag Views
class TagCreateView(generics.CreateAPIView):
    serializer_class = TagSerializer
    permission_classes = [permissions.IsAuthenticated]

class TagUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TagSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Tag.objects.all()
