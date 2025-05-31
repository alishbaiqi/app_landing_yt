
# Titanic Dataset Data Preprocessing
# BSCS 5th Semester - Data Mining Assignment

import pandas as pd
import numpy as np

# Load the Titanic dataset
url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
df = pd.read_csv(url)

print("Initial Data Snapshot:")
print(df.head())
print("\nMissing Values Summary:")
print(df.isnull().sum())

# -------------------------
# 1. Data Cleaning
# -------------------------

# Fill missing 'Age' with the median
df['Age'].fillna(df['Age'].median(), inplace=True)

# Fill missing 'Embarked' with the mode
df['Embarked'].fillna(df['Embarked'].mode()[0], inplace=True)

# Drop the 'Cabin' column (too many missing values)
df.drop(columns=['Cabin'], inplace=True)

print("\nAfter Cleaning Missing Values:")
print(df.isnull().sum())

# -------------------------
# 2. Handling Noisy Data
# -------------------------

# Binning 'Age' into categories
bins = [0, 12, 20, 40, 60, 80]
labels = ['Child', 'Teen', 'Adult', 'Senior', 'Elder']
df['AgeGroup'] = pd.cut(df['Age'], bins=bins, labels=labels)

print("\nSample Age Bins:")
print(df[['Age', 'AgeGroup']].head(10))

# -------------------------
# 3. Data Integration
# -------------------------

# Simulate a second dataset to merge
extra_data = pd.DataFrame({
    'PassengerId': df['PassengerId'],
    'LoyaltyScore': np.random.randint(1, 100, df.shape[0])
})

# Merge the datasets
df = pd.merge(df, extra_data, on='PassengerId', how='left')

print("\nAfter Merging Additional Dataset:")
print(df[['PassengerId', 'LoyaltyScore']].head())

# -------------------------
# Save Processed Data
# -------------------------
df.to_csv("processed_titanic_data.csv", index=False)
print("\nPreprocessing complete. Processed data saved to 'processed_titanic_data.csv'.")
