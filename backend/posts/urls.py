from django.urls import path
from .views import (
    PostCreateView, PostDetailView, 
    LikeCreateView, LikeDeleteView, 
    CommentCreateView, CommentDetailView,
    CategoryCreateView, CategoryUpdateDeleteView,
    TagCreateView, TagUpdateDeleteView
)

urlpatterns = [
    # Posts
    path('posts/create/', PostCreateView.as_view(), name='create-post'),
    path('posts/<int:pk>/', PostDetailView.as_view(), name='post-detail'),

    # Likes
    path('posts/<int:post_id>/like/', LikeCreateView.as_view(), name='like-post'),
    path('posts/<int:post_id>/like/remove/', LikeDeleteView.as_view(), name='remove-like'),

    # Comments
    path('posts/<int:post_id>/comment/', CommentCreateView.as_view(), name='create-comment'),
    path('comments/<int:pk>/', CommentDetailView.as_view(), name='comment-detail'),

    # Categories
    path('categories/create/', CategoryCreateView.as_view(), name='create-category'),
    path('categories/<int:pk>/', CategoryUpdateDeleteView.as_view(), name='update-delete-category'),

    # Tags
    path('tags/create/', TagCreateView.as_view(), name='create-tag'),
    path('tags/<int:pk>/', TagUpdateDeleteView.as_view(), name='update-delete-tag'),
]
