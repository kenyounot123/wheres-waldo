class Api::V1::TargetsController < ApplicationController
  def index
    @targets = Target.all
    render json: @targets
  end
end
