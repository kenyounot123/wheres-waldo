class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
  def create
    user = User.create!(user_params)
    if user 
      render json: user
    else
      render json: user.errors
    end
  end

  private

  def user_params
    params.permit(:name, :record)
  end
end
