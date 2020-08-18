# FIFA-OVR-ML 

### Description
Web application that estimates user's FIFA OVR based on 18 different features.
The app deploys a Random Forest Regressor that was built with the sci-kit learn library.
Detailed process of cleaning data and training machine learning model is depicted in the "Fifa.html" file
under "ml" directory.

```
cd ml
Fifa.html
```
### Demo
https://youtu.be/CmVvzBcpC4E

### Technologies
numpy,pandas,matplotlib.pyplot,seaborn,django,django REST framework, React

### Data Source
https://www.kaggle.com/stefanoleone992/fifa-20-complete-player-dataset

### Install Instructions
1. open "ml/Fifa.ipynb" in jupyter notebook and rerun the entire notebook
2. The ipynb file will save a "saved_model.pickle" (machine learning model) file inside the "ml" directory
3. move "saved_model.pickle" to "backend/predictor/"
4. create vitual env and download requirements
```
pip install virtualenv
virtualenv env
cd env/Scripts
activate
# go to project root directory
pip install -r requirements.txt
```
5. Need to have Node js installed
6. Run Backend (start from project root)
```
cd backend/
python manage.py runserver
```
7. Run Frontend (start from project root)
```
cd frontend/
npm start
```
