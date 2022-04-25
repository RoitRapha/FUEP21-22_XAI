## Team and project  description
*This notebook is the documentation of the result of an university project work of the HTW university of applied science. Developed by a group of Master students in mechanical engineering. The aim is to investigate different methods for determining relevant properties of the classification. For this purpose, forms of dimension reduction are also to be considered. The results from this are to be suitably visualized and evaluated with previously defined criteria.*

**Team members:**


*   Paul-Albert Bartlau
*   Maurice Lucas Dörnte
*   Tim Dieter Eberhardt
*   Tim Lukas Schröter
*   Raphael Wallsberger

## Repository structure

- [Original dataset](frequencyFeatures.csv)
- [Notebook with the main work](XAI_SHAP_UMAP.ipynb)
- [Additional Sankey Plot notebook](SankeyPlot.ipynb) 

## Methods

In this work, the XAI algorithm SHAP and the dimensionality reduction method UMAP were selected for further determination of relevant properties. The UMAP algorithm achieves very good results on high dimensional data and comparatively preserves the global and local relationships of the dataset very well. The SHAP algorithm is based on the "shapley values" and thus on a solid theoretical (game theory) and mathematical foundation. Especially the latter strengthens the acceptance of the method. Moreover, both local and global explanations can be performed and the predictions are evenly distributed over the feature values. Furthermore, SHAP has a TreeSHAP library that can be applied to tree algorithms and has very short computation time. Other SHAP variants, such as KernelSHAP, are very time and computationally intensive and practically difficult to apply.

In the first step, UMAP is now applied to the dataset to investigate the shapes of the individual class clusters, as well as their relative positions to each other. Also, a suitable tree algorithm is trained on the dataset as a classifier, in this case the XGBoost library. On the one hand because simple trees achieve good results, which are still comprehensible by humans, and on the other hand because of the aforementioned good applicability of TreeSHAP. The good accuracies (Accuracies - Acc) and F1-Scores speak for XGBoost in comparison to SVM and KNN . The next step is a selection of the hyperparameters of the model with different evaluation metrics (F1, Acc,..). The SHAP algorithm is applied to the XGBoost model. Results from this should be the 10 most important features of the classification, which are presented in a suitable form.

The following evaluation system is defined to be able to classify the results and the quality. On the one hand, the metrics Accuracy and F1-Score of the XGBoost are compared with different training data. On the other hand, other types of models (KNN and SVM) are trained with these data and their key figures are also evaluated. The three training datasets consist of: 1. the whole dataset, 2. the 10 most important features from TreeSHAP and 3. 10 random features. 
For an additional auditory representation of the most important features, the data is extracted and then made audible. The extraction includes only the 10 most important features of the data set, the remaining values of the other features are set to zero. Now the data can be transformed from the frequency domain back to the time domain. In the last step, a sound file for each class is generated from the cleaned data. These should give an indication of the type of error when listening.
### Dataset - frequencyFeatures.csv
The used dataset (file: frequencyFeatrues.csv) is from the following paper and you can download it with the following link:

*Paper: S. Matzka, J. Pilz and A. Franke, "Structure-borne and Air-borne Sound Data for Condition Monitoring Applications," 2021 4th International Conference on Artificial Intelligence for Industries (AI4I), 2021, pp. 1-4, doi: 10.1109/AI4I51902.2021.00009.*

Link: https://archive.ics.uci.edu/ml/datasets/AI4I+2020+Predictive+Maintenance+Dataset


