from django.urls import path
from .views import RegisterView, LoginView, UserProfileCreateUpdateView, UserAccountUpdateView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', UserProfileCreateUpdateView.as_view(), name='profile-create-update'),
    path('account/', UserAccountUpdateView.as_view(), name='account-update'),
]