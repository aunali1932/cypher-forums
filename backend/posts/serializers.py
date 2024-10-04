from rest_framework import serializers
from .models import Post, Comment, Like, Category, Tag

# Post Serializer
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['postid', 'user', 'title', 'description', 'post_time', 'view_count', 'category', 'tag', 'updated_at']

# Comment Serializer
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['commentid', 'post', 'user', 'content', 'created_at', 'updated_at']

# Like Serializer
class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['likeid', 'user', 'post', 'created_at']

# Category Serializer
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['category_id', 'name', 'description']

# Tag Serializer
class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['tag_id', 'name']
