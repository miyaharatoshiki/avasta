Rails.application.routes.draw do
#<<<<<<< HEAD
#<<<<<<< HEAD
  get 'information/index'

#<<<<<<< HEAD
  get 'mypage/index'

  get 'top/info'

#=======
  resources :pictures
#=======
#<<<<<<< HEAD
  resources :comments
#>>>>>>> 5219cb2bb827b8f77da9a9c4b53c5be4bef7cacd
#=======
#>>>>>>> 13ff64feb48dd265d1dc8b09ddcda882b2089080
  devise_for :users, controllers: {
	  registrations: 'users/registrations'
    }
  resources :users

#=======
#<<<<<<< HEAD
  #resources :comments
#=======
  #devise_for :users
  #resources :users
#>>>>>>> 5ba7381dab532c40fa63fb2e120e3e9dc78141c0
#>>>>>> 13ff64feb48dd265d1dc8b09ddcda882b2089080


  root to: redirect('/top/info')
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
